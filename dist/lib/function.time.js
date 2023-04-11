"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChineseMoney = exports.getTime = exports.getTimeGap = exports.getRangeYear = exports.getRangeMonth = exports.getRangeWeek = exports.getRangeDay = void 0;
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
    const day = today.getDay(); // 今天是星期几
    const monday = today.getTime() - (day - 1) * 86400000;
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
// 网上复制的，获取中文金额
function getChineseMoney(n) {
    var fraction = ["角", "分"];
    var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    var unit = [
        ["元", "万", "亿"],
        ["", "拾", "佰", "仟"],
    ];
    var head = n < 0 ? "欠" : "";
    n = Math.abs(n);
    var s = "";
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "");
    }
    s = s || "整";
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = "";
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
    }
    return (head +
        s
            .replace(/(零.)*零元/, "元")
            .replace(/(零.)+/g, "零")
            .replace(/^整$/, "零元整"));
}
exports.getChineseMoney = getChineseMoney;
