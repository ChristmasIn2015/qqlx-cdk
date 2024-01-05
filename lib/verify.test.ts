import * as verify from "./verify"


for (const mess of [...verify.INVALUE_VALUE_LIST, ...verify.DEFAULT_VALUE_LIST]) {
    describe(`[${typeof mess}] ${mess} testing...`, () => {
        it("isValid", () => {
            const result = verify.isValid(mess)

            if (verify.INVALUE_VALUE_LIST.includes(mess as any)) {
                expect(result).toBe(false)
            } else {
                expect(result).toBe(true)
            }
        })
        it("isObject", () => {
            const result = verify.isObject(mess)

            if ([null, undefined, NaN, "null", "undefined", "NaN"].includes(mess as any)) {
                expect(result).toBe(false)
            } else if (["number", "string", "boolean"].includes(typeof mess)) {
                expect(result).toBe(false)
            } else {
                expect(result).toBe(true)
            }
        })
        it("toNumber", () => {
            const result = verify.toNumber(mess)
            expect(result).toEqual(expect.any(Number))
            expect(new RegExp(/^-?\d+(\.\d+)?([eE][-+]?\d+)?$/).test(result.toString())).toBe(true)
        })
        it("toString", () => {
            const result = verify.toString(mess)
            expect(result).toEqual(expect.any(String))
        })
        it("toBoolean", () => {
            const result = verify.toBoolean(mess)
            expect(result).toEqual(expect.any(Boolean))
        })
    })
}
