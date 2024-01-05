import { SMALLINT_PG, INTEGER_PG, BIGINT_PG } from "qqlx-core";
import { toNumber, toString } from "./verify";

export class TransformerSmallInt {
    private trans (mess: any) {
        const value = toNumber(mess);
        return Math.min(32767, Math.max(-32768, value));
    }

    to (mess: any): SMALLINT_PG {
        return this.trans(mess);
    }

    from (mess: any): SMALLINT_PG {
        return this.trans(mess);
    }
}

export class TransformerInteger {
    private trans (mess: any) {
        const value = toNumber(mess);
        return Math.min(2147483647, Math.max(-2147483648, value));
    }
    to (mess: any): INTEGER_PG {
        return this.trans(mess);
    }

    from (mess: any): INTEGER_PG {
        return this.trans(mess);
    }
}

export class TransformerBigInteger {
    private trans (mess: any) {
        let bigint = "-1";
        try {
            const _mess = BigInt(toString(mess))
            if (_mess >= BigInt("9223372036854775807")) return BigInt("9223372036854775807").toString()
            else if (_mess <= BigInt("-9223372036854775808")) return BigInt("-9223372036854775808").toString()
            else return _mess.toString()

        } catch (error) {
            //
        } finally {
            return bigint;
        }
    }

    to (mess: any): BIGINT_PG {
        return this.trans(mess);
    }

    from (mess: any): BIGINT_PG {
        return this.trans(mess);
    }
}
