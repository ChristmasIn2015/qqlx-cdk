"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPage = void 0;
const function_time_1 = require("./function.time");
/** 获取分页基本参数 */
function getPage() {
    const range = (0, function_time_1.getRangeDay)();
    const page = {
        page: 1,
        pageSize: 20,
        startTime: range.startTime,
        endTime: range.endTime,
    };
    return Object.assign(Object.assign({}, page), { list: [], total: 0 });
}
exports.getPage = getPage;
