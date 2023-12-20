/** 仅判断入参是否是 null, undefined, NaN，以及无意义的字符串 */
export function isValid (mess: any): boolean {
    const isErrorValue = [null, undefined, NaN].includes(mess)
    const isErrorString = ["null", "undefined", "NaN"].includes(String(mess).replace(/\s/g, ""))

    return !(isErrorValue || isErrorString)
}

/** 仅判断入参是否是一个 JavaScript 对象 */
export function isObject (mess: any): boolean {
    if (isValid(mess)) {
        return ["number", "string", "boolean"].includes(typeof mess) ? false : true
    } else {
        return false
    }
}

/** 转换成数字
 * @expect Number(object) => NaN => -1
 * @expect Number(true) => 1 => -1
 * @wanner 如果 mess 不正确则返回这个期望 wanner 值
*/
export function toNumber (mess: any, wanner?: number): number {
    if (isValid(wanner)) {
        const match = Number(wanner)
        return Number.isNaN(match) ? -1 : match
    }
    else if (isValid(mess)) {
        const match = Number(mess)
        if (mess === true) return -1
        else if (Number.isNaN(match)) return -1
        else return match
    }
    else return -1
}


/** 转换成字符串
 * @expect 对象会变成 [object Object]
 * @wanner 如果 mess 不正确则会返回这个期望的值
*/
export function toString (mess: any, wanner?: string): string {
    if (isValid(mess)) {
        if (isValid(wanner)) return String(wanner) || ""
        else return String(mess) || ""
    } else {
        return ""
    }
}


/** 转换成 true\false
 * @expect 字符串 “false” 将会是 false
 */
export function toBoolean (mess: any): boolean {
    if (isValid(mess)) {
        const isFalseStr = String(mess).replace(/\s/g, "") === "false"
        return isFalseStr ? false : Boolean(mess)
    } else {
        return false
    }
}