"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimObject = void 0;
/** 一个对象的值，如果是字符串，将会被去除空白内容 */
function trimObject(incoming) {
    if (!incoming)
        return;
    for (const key in incoming) {
        if (typeof incoming[key] === "string") {
            incoming[key] = incoming[key].replace(/\s/g, "");
        }
    }
}
exports.trimObject = trimObject;
