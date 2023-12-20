import type { Page, PageRes } from "qqlx-core"
import { ConditionType, Sortable } from "qqlx-core"

import { toString } from "./verify"

/** pageSize 最多返回 1000 条结果 */
export function getPageDto<T> (pageSize = 15): Page<T> {
    if (pageSize > 1000) pageSize = 1000

    return {
        page: 1,
        pageSize,
        conditionList: []
    };
}

export function getPageResDto<T> (): PageRes<T> {
    return {
        total: 0,
        list: [],
    };
}