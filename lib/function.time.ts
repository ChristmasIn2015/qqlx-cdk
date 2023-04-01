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

    const day = today.getDay(); // 今天是星期几
    const monday = today.getTime() - (day - 1) * 86400000;
    return {
        startTime: monday,
        endTime: today.getTime(),
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
        endTime: today.getTime(),
    };
}

/** 本年1月1日0点～现在 */
export function getRangeYear(): { startTime: number; endTime: number } {
    const today = new Date();
    const year = today.getFullYear();

    const firstDay = new Date(`${year}/01/01 00:00`);
    return {
        startTime: firstDay.getTime(),
        endTime: today.getTime(),
    };
}
