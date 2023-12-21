import type { Page, PageRes, TimeFilter, KeyString, KeySortable, KeyBigInt, KeyBool, KeyAccumulatable, ConditionMatchInteger, ConditionMatchIntegerOrs } from "qqlx-core"
import type {
    ConditionMatchStr, ConditionMatchStrOrs,
    ConditionMatchBool,
    ConditionMatchEnum, ConditionMatchEnumOrs,
    ConditionRegExpStr,
    ConditionSort,
    ConditionTime
} from "qqlx-core"
import { ConditionType, Sortable } from "qqlx-core"

import { toString } from "./verify"

// ======================================================================================= 1

export function getConditionMatchStr<T> (key: KeyString<T>, value: string = ""): ConditionMatchStr<T> {
    return {
        type: ConditionType.MatchStr,
        key,
        value
    }
}
export function getConditionMatchStrOrs<T> (key: KeyString<T>, value: string[] = []): ConditionMatchStrOrs<T> {
    return {
        type: ConditionType.MatchStrOrs,
        key,
        value
    }
}

// ======================================================================================= 2

export function getConditionMatchBool<T> (key: KeyBool<T>, value: boolean = false): ConditionMatchBool<T> {
    return {
        type: ConditionType.MatchBool,
        key,
        value
    }
}

// ======================================================================================= 3

export function getConditionMatchEnum<T> (key: KeyAccumulatable<T>, value: number = -1): ConditionMatchEnum<T> {
    return {
        type: ConditionType.MatchEnum,
        key,
        value
    }
}
export function getConditionMatchEnumOrs<T> (key: KeyAccumulatable<T>, value: number[] = []): ConditionMatchEnumOrs<T> {
    return {
        type: ConditionType.MatchEnumOrs,
        key,
        value
    }
}

// ======================================================================================= 3

export function getConditionMatchInteger<T> (key: KeyAccumulatable<T>, value: number = -1): ConditionMatchInteger<T> {
    return {
        type: ConditionType.MatchInteger,
        key,
        value
    }
}
export function getConditionMatchIntegerOrs<T> (key: KeyAccumulatable<T>, value: number[] = []): ConditionMatchIntegerOrs<T> {
    return {
        type: ConditionType.MatchIntegerOrs,
        key,
        value
    }
}

// ======================================================================================= 4

export function getConditionRegExpStr<T> (key: KeyString<T>, value: string = ""): ConditionRegExpStr<T> {
    return {
        type: ConditionType.RegExpStr,
        key,
        value
    }
}

// ======================================================================================= sort

export function getConditionSort<T> (key: KeySortable<T>, value: Sortable = Sortable.DESC): ConditionSort<T> {
    return {
        type: ConditionType.Sort,
        key,
        value
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