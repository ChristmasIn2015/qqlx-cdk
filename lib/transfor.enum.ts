import { SMALLINT_PG } from "qqlx-core";
import { toBoolean, toNumber, toString } from "./verify";

export class TransformerEnum {
    smallintList!: SMALLINT_PG[]
    defaultEumn!: SMALLINT_PG

    constructor(smallintList: SMALLINT_PG[], defaultEumn: SMALLINT_PG) {
        this.smallintList = smallintList
        this.defaultEumn = defaultEumn
    }

    private trans (mess: any) {
        const _mess = toNumber(mess)
        const is_enum_valid = this.smallintList.includes(_mess);
        return is_enum_valid ? _mess : this.defaultEumn
    }

    to (mess: any): SMALLINT_PG {
        return this.trans(mess);
    }

    from (mess: any): SMALLINT_PG {
        return this.trans(mess);
    }
}
