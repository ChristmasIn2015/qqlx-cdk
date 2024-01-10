import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, JoinColumn, OneToOne, BeforeInsert, OneToMany } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, INTEGER_PG, StreamUser, UserWeChat, UserTelecom, UserEmail } from "qqlx-core";
import { RELATIONS_STREAM_USER, RELATIONS_STREAM_USER_WECHAT, RELATIONS_STREAM_USER_TELECOM } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { UserWeChatSchema } from "./stream-user-wechat";
import { UserTelecomSchema } from "./stream-user-telecom";
import { UserEmailSchema } from "./stream-user-email";

@Entity({ name: RELATIONS_STREAM_USER })
export class StreamUserSchema implements StreamUser {
    @PrimaryGeneratedColumn()
    uuid32: VARCHAR50_PG = "";

    // =============================
    // ============ JOIN ===========
    // =============================

    @OneToMany((type) => UserWeChatSchema, (s) => s.joinStreamUser)
    joinWeChatList!: UserWeChatSchema[];

    @OneToMany((type) => UserTelecomSchema, (s) => s.joinStreamUser)
    joinTelecomList!: UserTelecomSchema[];

    @OneToMany((type) => UserEmailSchema, (s) => s.joinStreamUser)
    joinEmailList!: UserEmailSchema[];

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @Column({ transformer: new TransformerInteger() })
    id!: INTEGER_PG;

    @Column({ transformer: new TransformerBoolean() })
    isDisabled: boolean = false;

    @Column({ transformer: new TransformerBigInteger() })
    timeCreate: BIGINT_PG = Date.now().toString();

    @Column({ transformer: new TransformerBigInteger() })
    timeUpdate: BIGINT_PG = Date.now().toString();

    // =============================
    // ==== 插入之前不能是函数 ====
    // =============================

    @BeforeInsert()
    notFunction () {
        for (const k in this) {
            if (typeof this[k] === "function") {
                //@ts-ignore
                this[k] = this[k].toString();
            }
        }
    }
}
