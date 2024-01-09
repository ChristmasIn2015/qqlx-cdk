import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, INTEGER_PG, UserEmail, VARCHAR255_PG, StreamUser } from "qqlx-core";
import { RELATIONS_STREAM_USER, RELATIONS_STREAM_USER_WECHAT, RELATIONS_STREAM_USER_TELECOM, RELATIONS_STREAM_USER_EMAIL } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";
import { StreamUserSchema } from "./stream-user";

import { PgBase } from "../lib/schema";

@Entity({ name: RELATIONS_STREAM_USER_EMAIL })
export class UserEmailSchema extends PgBase implements UserEmail {
    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    email: VARCHAR50_PG = "";

    // =============================
    // ============ JOIN ===========
    // =============================

    @ManyToOne((s) => StreamUserSchema, (s) => s.joinWeChatList)
    @JoinColumn({ name: "uuid32", referencedColumnName: "uuid32" })
    joinStreamUser?: StreamUser;
}
