/** 默认范围：第1页（限制20）今天0点～今天午夜12点 */
import { Page, PageRes } from "./type.database";

import { getRangeYear } from "./function.time";

/** 默认本年0点～至今 */
export function getPage(): Page {
    const range = getRangeYear();
    const page = {
        page: 1,
        pageSize: 20,
        startTime: range.startTime,
        endTime: range.endTime,
    };
    return page;
}

/** 默认本年0点～至今 */
export function getPageRes<T>(): Page & PageRes<T> {
    const page = getPage();
    return { ...page, list: [], total: 0 };
}
