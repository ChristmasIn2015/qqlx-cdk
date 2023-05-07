"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLog = exports.getTime = exports.getTimeGap = exports.getRangeYear = exports.getRangeMonth = exports.getRangeWeek = exports.getRangeDay = void 0;
/** 今天0点～今天午夜12点 */
function getRangeDay() {
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
exports.getRangeDay = getRangeDay;
/** 本周一0点～现在 */
function getRangeWeek() {
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
exports.getRangeWeek = getRangeWeek;
/** 本月1日0点～现在 */
function getRangeMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const firstDay = new Date(`${year}/${month}/01 00:00`);
    return {
        startTime: firstDay.getTime(),
        endTime: Date.now() + 86400000,
    };
}
exports.getRangeMonth = getRangeMonth;
/** 本年1月1日0点～现在 */
function getRangeYear() {
    const today = new Date();
    const year = today.getFullYear();
    const firstDay = new Date(`${year}/01/01 00:00`);
    return {
        startTime: firstDay.getTime(),
        endTime: Date.now() + 86400000,
    };
}
exports.getRangeYear = getRangeYear;
/** 获取从A-B时间，共有多少天时秒 */
function getTimeGap(big, small) {
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
exports.getTimeGap = getTimeGap;
/** 获取标准时间字符串 */
function getTime(mills) {
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
exports.getTime = getTime;
/** 仅用于查看函数耗时 */
function TimeLog(message) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                const start = Date.now();
                const data = yield original.apply(this, args);
                const gap = Date.now() - start;
                console.log(message, gap, "\n");
                return data;
            });
        };
        return descriptor;
    };
}
exports.TimeLog = TimeLog;
