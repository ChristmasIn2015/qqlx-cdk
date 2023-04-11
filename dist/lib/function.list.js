"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageRes = exports.getPage = void 0;
const function_time_1 = require("./function.time");
/** 默认本年0点～至今 */
function getPage(size = 20) {
    const range = (0, function_time_1.getRangeYear)();
    const page = {
        page: 1,
        pageSize: size,
        startTime: range.startTime,
        endTime: range.endTime,
    };
    return page;
}
exports.getPage = getPage;
/** 默认本年0点～至今 */
function getPageRes() {
    const page = getPage();
    return Object.assign(Object.assign({}, page), { list: [], total: 0 });
}
exports.getPageRes = getPageRes;
