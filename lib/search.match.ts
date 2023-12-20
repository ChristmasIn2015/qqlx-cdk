import type { Page, PageRes, TimeFilter, KeyString, KeySortable, KeyBigInt, KeyBool, KeyAccumulatable } from "qqlx-core"
import type {
    ConditionMatchStr, ConditionMatchStrOrs,
    ConditionMatchBool,
    ConditionMatchEnum, ConditionMatchEnumOrs,
    ConditionRegExpStr, ConditionRegExpStrOrs,
    ConditionSort,
    ConditionTime
} from "qqlx-core"
import { ConditionType, Sortable } from "qqlx-core"

import { toString } from "./verify"

// ======================================================================================= 1

export function getConditionMatchStr<T> (key: KeyString<T>): ConditionMatchStr<T> {
    return {
        type: ConditionType.MatchStr,
        key: key,
        value: ""
    }
}
export function getConditionMatchStrOrs<T> (key: KeyString<T>): ConditionMatchStrOrs<T> {
    return {
        type: ConditionType.MatchStrOrs,
        key: key,
        value: []
    }
}

// ======================================================================================= 2

export function getConditionMatchBool<T> (key: KeyBool<T>): ConditionMatchBool<T> {
    return {
        type: ConditionType.MatchBool,
        key: key,
        value: false
    }
}

// ======================================================================================= 3

export function getConditionMatchEnum<T> (key: KeyAccumulatable<T>): ConditionMatchEnum<T> {
    return {
        type: ConditionType.MatchEnum,
        key: key,
        value: -1
    }
}
export function getConditionMatchEnumOrs<T> (key: KeyAccumulatable<T>): ConditionMatchEnumOrs<T> {
    return {
        type: ConditionType.MatchEnumOrs,
        key: key,
        value: []
    }
}

// ======================================================================================= 4

export function getConditionRegExpStr<T> (key: KeyString<T>): ConditionRegExpStr<T> {
    return {
        type: ConditionType.RegExpStr,
        key: key,
        value: ""
    }
}
export function getConditionRegExpStrOrs<T> (key: KeyString<T>): ConditionRegExpStrOrs<T> {
    return {
        type: ConditionType.RegExpStrOrs,
        key: key,
        value: []
    }
}

// ======================================================================================= sort

export function getConditionSort<T> (key: KeySortable<T>): ConditionSort<T> {
    return {
        type: ConditionType.Sort,
        key: key,
        value: Sortable.DESC
    }
}

// ======================================================================================= time

/** 默认设置 0~当前时间 */
export function getTimeFilter (): TimeFilter {
    return {
        startTime: "0",
        endTime: toString(Date.now()),
    };
}

/** 默认设置 0~当前时间 */
export function getConditionTime<T> (key: KeyBigInt<T>): ConditionTime<T> {
    return {
        type: ConditionType.Time,
        key: key,
        value: getTimeFilter()
    }
}