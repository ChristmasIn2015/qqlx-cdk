/** Arithmetic 是指基础的数字运算 */
class FourOperationsOfArithmetic {

    // 表达式
    expression: string

    // 当前解析的位置
    private index: number = 0

    constructor(expression) {
        this.expression = expression.replace(/\s/g, '');
    }

    parse () {
        try {
            const result = this.parseAdditionSubtraction();

            // 确保整个表达式都被解析
            if (this.index !== this.expression.length) {
                throw new Error('无效的表达式');
            }

            return result;
        } catch (error) {
            return `解析错误: ${error.message}`;
        }
    }

    parseAdditionSubtraction () {
        let left = this.parseMultiplicationDivision();

        while (this.index < this.expression.length && (this.expression[this.index] === '+' || this.expression[this.index] === '-')) {
            const operator = this.expression[this.index];
            this.index++;

            const right = this.parseMultiplicationDivision();

            if (operator === '+') {
                left += right;
            } else {
                left -= right;
            }
        }

        return left;
    }

    parseMultiplicationDivision () {
        let left = this.parseNumber();

        while (this.index < this.expression.length && (this.expression[this.index] === '*' || this.expression[this.index] === '/')) {
            const operator = this.expression[this.index];
            this.index++;

            const right = this.parseNumber();

            if (operator === '*') {
                left *= right;
            } else {
                if (right !== 0) {
                    left /= right;
                } else {
                    throw new Error('除数不能为零');
                }
            }
        }

        return left;
    }

    parseNumber () {
        /** 整数小数 */
        const firstNumberStrList = this.expression.slice(this.index).match(/^\d+(\.\d+)?/);

        if (firstNumber) {
            this.index += match[0].length;
            return parseFloat(match[0]);
        } else {
            throw new Error('无效的数字');
        }
    }
}

/** @example "2 * (3 + 4) - 5 / 2" */
export function getArithmeticOfFour (): number {
    const parser = new FourOperationsOfArithmetic('2 * (3 + 4) - 5 / 2');
    return parser.parse();
}
