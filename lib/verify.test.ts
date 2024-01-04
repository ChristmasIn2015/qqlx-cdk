import * as verify from "./verify"


for (const mess of [
    null,
    undefined,
    NaN,
    "null",
    "undefined",
    "NaN",
    "object",
    10086,
    0,
    -1,
    -10086,
    "",
    "10086",
    "true",
    "false",
    true,
    false,
    {},
    new Object,
    new Map(),
    function () { },
]) {
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

            if ([null, undefined, NaN, "null", "undefined", "NaN"].includes(mess as any)) {
                expect(result).toBe(-1)
            } else {
                expect([-10086, -1, 0, 10086]).toEqual(expect.arrayContaining([result]));
            }
        })
        it("toNumber 5678", () => {
            const result = verify.toNumber(mess, 5678)
            expect(result).toEqual(expect.any(Number))

            if ([null, undefined, NaN, "null", "undefined", "NaN"].includes(mess as any)) {
                expect(result).toBe(5678)
            } else {
                expect([-10086, 0, 5678, 10086]).toEqual(expect.arrayContaining([result]));
            }
        })
        it("toString", () => {
            const result = verify.toString(mess)
            expect(result).toEqual(expect.any(String))
        })
        it("toString hello", () => {
            const result = verify.toString(mess, "hello")
            expect(result).toEqual(expect.any(String))

            if ([null, undefined, NaN, "null", "undefined", "NaN"].includes(mess as any)) {
                expect(result).toBe("")
            }
        })
        it("toBoolean", () => {
            const result = verify.toBoolean(mess)
            expect(result).toEqual(expect.any(Boolean))
        })
    })
}
