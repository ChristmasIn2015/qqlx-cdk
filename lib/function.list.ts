/** 默认范围：第1页（限制20）今天0点～今天午夜12点 */
import { Page, PageRes } from "./type.database";

import { getRangeDay } from "./function.time";

/** 获取分页基本参数 */
export function getPage<T>(): Page & PageRes<T> {
    const range = getRangeDay();

    const page = {
        page: 1,
        pageSize: 20,
        startTime: range.startTime,
        endTime: range.endTime,
    };

    return { ...page, list: [], total: 0 };
}
