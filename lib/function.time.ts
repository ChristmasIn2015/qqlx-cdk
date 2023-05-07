import { Page, PageRes } from "./type.database";

/** 今天0点～今天午夜12点 */
export function getRangeDay(): { startTime: number; endTime: number } {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    const time = today.getTime();
    return {
        startTime: time,
        endTime: time + 86400000,
    };
}

/** 本周一0点～现在 */
export function getRangeWeek(): { startTime: number; endTime: number } {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    const day = today.getDay(); // 今天是星期几, 星期天是0
    const monday = today.getTime() - ((day === 0 ? 7 : day) - 1) * 86400000;
    return {
        startTime: monday,
        endTime: Date.now() + 86400000,
    };
}

/** 本月1日0点～现在 */
export function getRangeMonth(): { startTime: number; endTime: number } {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const firstDay = new Date(`${year}/${month}/01 00:00`);
    return {
        startTime: firstDay.getTime(),
        endTime: Date.now() + 86400000,
    };
}

/** 本年1月1日0点～现在 */
export function getRangeYear(): { startTime: number; endTime: number } {
    const today = new Date();
    const year = today.getFullYear();

    const firstDay = new Date(`${year}/01/01 00:00`);
    return {
        startTime: firstDay.getTime(),
        endTime: Date.now() + 86400000,
    };
}

/** 获取从A-B时间，共有多少天时秒 */
export function getTimeGap(big: number, small: number) {
    const gap = big - small;

    const hour = ~~(gap / 1000 / 60 / 60) % 24;
    const _hour = hour < 10 ? `0${hour}` : hour.toString();

    const min = ~~(gap / 1000 / 60) % 60;
    const _min = min < 10 ? `0${min}` : min.toString();

    const sec = ~~(gap / 1000) % 60;
    const _sec = sec < 10 ? `0${sec}` : sec.toString();

    const day = ~~(gap / 1000 / 60 / 60 / 24);

    return `${day}天 ${_hour}:${_min}:${_sec}`;
}

/** 获取标准时间字符串 */
export function getTime(mills: number) {
    const date = new Date(mills);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthStr = month < 10 ? `0${month}` : month;
    const day = date.getDate();
    const dayStr = day < 10 ? `0${day}` : day;

    const sec = date.toLocaleString().split(" ")[1];
    return {
        mills,
        text: `${year}/${monthStr}/${dayStr}`,
        text_full: `${year}/${monthStr}/${dayStr} ${sec}`,
    };
}

/** 仅用于查看函数耗时 */
export function TimeLog(message: string) {
    return function (target: Object | Function, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        const original = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const start = Date.now();
            const data = await original.apply(this, args);

            const gap = Date.now() - start;
            console.log(message, gap, "\n");
            return data;
        };

        return descriptor;
    };
}
