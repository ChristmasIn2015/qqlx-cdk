"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeGap = void 0;
/** 某些分析数据需要按照时间间隔分布 */
var TimeGap;
(function (TimeGap) {
    TimeGap[TimeGap["DAY"] = 0] = "DAY";
    TimeGap[TimeGap["WEEK"] = 1] = "WEEK";
    TimeGap[TimeGap["MONTH"] = 2] = "MONTH";
    TimeGap[TimeGap["YEAR"] = 3] = "YEAR";
})(TimeGap = exports.TimeGap || (exports.TimeGap = {}));
