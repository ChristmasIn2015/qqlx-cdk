/** 仅判断入参是否是 null, undefined, NaN，以及无意义的字符串 */
export function isValidValue (value: any) {
    const charge1 = [null, undefined, NaN].includes(value)
    const charge2 = ["null", "undefined", "NaN"].includes(String(value).replace(/\s/g, ""))

    return !(charge1 || charge2)
}

/** 仅判断入参是否是一个 JavaScript 对象 */
export function isObject (value: any) {
    if (isValidValue(value) === false) return false
    else if (["number", "string", "boolean"].includes(typeof value)) return false
    else return true
}

/** 仅判断入参是否是一个 JavaScript 数字
 * @transform 如果不是数字，将入参变成指定的数字
*/
export function toNumber (value: any, transform?: number) {
    const result = { value: Number(value) || 0 }

    if (isValidValue(transform)) {
        result.value = Number(transform || 0)
    }

    return result.value
}


/** 仅判断入参是否是一个 JavaScript 数字
 * @transform 将入参变成数字
*/
export function toString (value: any, transform?: string) {
    const result = { value: String(value) || "" }

    if (isValidValue(transform)) {
        result.value = String(transform || "")
    }

    return result.value
}


/** 仅判断入参是否是一个 JavaScript 数字
 * @transform 将入参变成数字
*/
export function toBoolean (value: any) {
    const result = { value: Boolean(value) }

    return result.value
}