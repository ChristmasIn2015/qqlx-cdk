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
 * @expect 对象会变成 NaN 然后返回 0
 * @wanner 如果 mess 不正确则会返回这个期望的值
*/
export function toNumber (mess: any, wanner?: number): number {
    if (isValid(mess)) {
        if (mess === true) return 0
        else if (typeof mess === 'number') return mess || 0
        else if (isValid(wanner)) return Number(wanner) || 0
        else return Number(mess) || 0
    } else {
        if (isValid(wanner)) return Number(wanner) || 0
        else return 0
    }
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