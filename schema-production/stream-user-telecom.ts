import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, INTEGER_PG, UserTelecom, StreamUser } from "qqlx-core";
import { RELATIONS_STREAM_USER, RELATIONS_STREAM_USER_WECHAT, RELATIONS_STREAM_USER_TELECOM } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";
import { StreamUserSchema } from "./stream-user";

import { PgBase } from "../lib/schema";

@Entity({ name: RELATIONS_STREAM_USER_TELECOM })
export class UserTelecomSchema extends PgBase implements UserTelecom {
    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    phone: VARCHAR50_PG = "";

    // =============================
    // ============ JOIN ===========
    // =============================

    @ManyToOne((s) => StreamUserSchema, (s) => s.joinWeChatList)
    @JoinColumn({ name: "joinStreamUser", referencedColumnName: "uuid32" })
    joinStreamUser?: StreamUser;
}
