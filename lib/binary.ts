import { toNumber, toString } from "./verify"

/** 二进制字符串 0000 和它的十进制数字 */
export type DecimalData = {
    binaryStr: string;
    decimal: number;
    bits: number;
}

/** 给定数位，返回数位允许的所有二进制数字
 * @bits 例如给定 4 则返回四位二进制数 0000 包含的所有内容
 * @bits 最大是16，即65536
*/
export function getBinaryDataList (bits: number): DecimalData[] {
    bits = toNumber(bits)
    if (bits >= 16) bits = 16;

    const datas: DecimalData[] = [];
    const max_decimal = Math.pow(2, bits) - 1;
    for (let i = 0; i <= max_decimal; i++) {
        datas.push({
            binaryStr: i.toString(2).padStart(bits, '0'),
            decimal: i,
            bits: bits
        });
    }
    return datas;
}

/** 给定数字返回对应二进制字符，如 256 将会返回 100,000,000
 * @bits 至少要是多少位
 */
export function getBinartData (decimal: number, bits: number): DecimalData {
    decimal = toNumber(decimal)
    bits = toNumber(bits)
    return {
        binaryStr: decimal.toString(2).padStart(bits, '0'),
        decimal,
        bits
    }
}

/** 给定二进制字符返回对应数字，如 100,000,000 将会返回 256
 * @bits 至少要是多少位
 */
export function getDecimalData (binaryStr: string): DecimalData {
    binaryStr = toString(binaryStr)
    return {
        binaryStr,
        decimal: parseInt(binaryStr, 2),
        bits: binaryStr.length
    }
}