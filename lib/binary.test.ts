import { getBinaryDataList, getBinartData, getDecimalData } from "./binary"

describe(`binary.ts`, () => {
    it("0~8 bits data", () => {
        Array(9).fill(null).map((n, index) => {
            const datas = getBinaryDataList(index)
            expect(datas.length).toBe(Math.pow(2, index))
            datas.map(d => {
                expect(getBinartData(d.decimal, d.bits).binaryStr).toBe(d.binaryStr)
                expect(getDecimalData(d.binaryStr).decimal).toBe(d.decimal)
            })
        })
    })
})