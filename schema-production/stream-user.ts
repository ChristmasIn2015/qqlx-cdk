import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, JoinColumn, OneToOne, BeforeInsert } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, INTEGER_PG, StreamUser, UserWeChat } from "qqlx-core";
import { RELATIONS_STREAM_USER, RELATIONS_STREAM_USER_WECHAT, RELATIONS_STREAM_USER_TELECOM } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";

@Entity({ name: RELATIONS_STREAM_USER })
export class StreamUserSchema implements StreamUser {
    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

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