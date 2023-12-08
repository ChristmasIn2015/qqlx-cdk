import type {
    Page, PageRes, TimeFilter,
    KeyString, KeySortable, KeyBigInt, KeyBool, KeyAccumulatable,
    ConditionMatchStr, ConditionMatchInt, ConditionMatchBool,
    ConditionRegExp, ConditionSort, ConditionTime
} from "qqlx-core"
import { ConditionType, Sortable } from "qqlx-core"
import { toString } from "./verify"

// ========================== Condition ==========================

export function getConditionMatchStr<T> (key: KeyString<T>): ConditionMatchStr<T> {
    return {
        type: ConditionType.MatchStr,
        key: key,
        value: ""
    }
}

export function getConditionMatchInt<T> (key: KeyAccumulatable<T>): ConditionMatchInt<T> {
    return {
        type: ConditionType.MatchInt,
        key: key,
        value: 0
    }
}

export function getConditionMatchBool<T> (key: KeyBool<T>): ConditionMatchBool<T> {
    return {
        type: ConditionType.MatchBool,
        key: key,
        value: false
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

export function getTimeFilter (): TimeFilter {
    return {
        startTime: "0",
        endTime: toString(Date.now()),
    };
}

export function getConditionTime<T> (key: KeyBigInt<T>): ConditionTime<T> {
    return {
        type: ConditionType.Time,
        key: key,
        value: getTimeFilter()
    }
}

// ========================== Page ==========================

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