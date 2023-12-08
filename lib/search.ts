import type {
    Page, PageRes, TimeFilter,
    KeyString, KeySortable, KeyBigInt,
    ConditionRegExp, ConditionSort, ConditionTime
} from "qqlx-core"
import { ConditionType, Sortable } from "qqlx-core"
import { toString } from "./verify"


export function getTimeFilter (): TimeFilter {
    return {
        startTime: "0",
        endTime: toString(Date.now()),
    };
}

/** pageSize 最多返回 1000 条结果 */
export function getPageDto<T> (pageSize = 15): Page<T> {
    if (pageSize > 1000) pageSize = 1000

    return {
        page: 1,
        pageSize,
        calcus: [],
        conditions: []
    };
}

export function getPageResDto<T> (): PageRes<T> {
    return {
        total: 0,
        list: [],
        calcus: [],
    };
}

// ========================== Condition ==========================

export function getConditionTime<T> (key: KeyBigInt<T>): ConditionTime<T> {
    return {
        type: ConditionType.Time,
        key: key,
        value: getTimeFilter()
    }
}

export function getConditionRegExp<T> (key: KeyString<T>): ConditionRegExp<T> {
    return {
        type: ConditionType.RegExp,
        key: key,
        value: ""
    }
}

export function getConditionSort<T> (key: KeySortable<T>): ConditionSort<T> {
    return {
        type: ConditionType.Sort,
        key: key,
        value: Sortable.DESC
    }
}