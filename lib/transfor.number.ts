import { SMALLINT_PG, INTEGER_PG, BIGINT_PG } from "qqlx-core";
import { toNumber } from "./verify";

export class TransformerSmallInt {
    private trans(mess: any) {
        const value = toNumber(mess);
        return Math.min(32767, Math.max(-32768, value));
    }

    to(mess: any): SMALLINT_PG {
        return this.trans(mess);
    }

    from(mess: any): SMALLINT_PG {
        return this.trans(mess);
    }
}

export class TransformerInteger {
    private trans(mess: any) {
        const value = toNumber(mess);
        return Math.min(2147483647, Math.max(-2147483648, value));
    }
    to(mess: any): INTEGER_PG {
        return this.trans(mess);
    }

    from(mess: any): INTEGER_PG {
        return this.trans(mess);
    }
}

export class TransformerBigInteger {
    private trans(mess: any) {
        let bigint = "-1";
        try {
            bigint = BigInt(mess).toString();
        } catch (error) {
            //
        } finally {
            return bigint;
        }
    }

    to(mess: any): BIGINT_PG {
        return this.trans(mess);
    }

    from(mess: any): BIGINT_PG {
        return this.trans(mess);
    }
}
