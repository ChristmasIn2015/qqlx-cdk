import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamUserAccessGroup, INTEGER_PG, StreamUserAccess, VARCHAR255_PG, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_STREAM_USER_ACCESS, RELATIONS_STREAM_USER_ACCESS_GROUP } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

@Entity({ name: RELATIONS_STREAM_USER_ACCESS_GROUP })
export class StreamUserAccessGroupSchema implements StreamUserAccessGroup {
    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    name: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    desc: VARCHAR255_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    scope: VARCHAR255_PG = "";

    @Column({ transformer: new TransformerSmallInt() })
    droit: SMALLINT_PG = 0;

    // =============================
    // ==== 插入之前不能是函数 ====
    // =============================

    @BeforeInsert()
    notFunction() {
        for (const k in this) {
            if (typeof this[k] === "function") {
                //@ts-ignore
                this[k] = this[k].toString();
            }
        }
    }

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ transformer: new TransformerBoolean() })
    isDisabled: boolean = false;

    @Column({ transformer: new TransformerBigInteger() })
    timeCreate: BIGINT_PG = Date.now().toString();

    @Column({ transformer: new TransformerBigInteger() })
    timeUpdate: BIGINT_PG = Date.now().toString();
}
