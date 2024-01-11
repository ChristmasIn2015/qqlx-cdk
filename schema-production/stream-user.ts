import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, JoinColumn, OneToOne, BeforeInsert, OneToMany, PrimaryColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, INTEGER_PG, StreamUser, UserWeChat, UserTelecom, UserEmail } from "qqlx-core";
import { RELATIONS_STREAM_USER, RELATIONS_STREAM_USER_WECHAT, RELATIONS_STREAM_USER_TELECOM } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { UserWeChatSchema } from "./stream-user-wechat";
import { UserTelecomSchema } from "./stream-user-telecom";
import { UserEmailSchema } from "./stream-user-email";

import { UuidBase } from "../lib/schema";

@Entity({ name: RELATIONS_STREAM_USER })
export class StreamUserSchema extends UuidBase implements StreamUser {
    // =============================
    // ============ JOIN ===========
    // =============================

    @OneToMany((type) => UserWeChatSchema, (s) => s.joinStreamUser)
    joinWeChatList!: UserWeChatSchema[];

    @OneToMany((type) => UserTelecomSchema, (s) => s.joinStreamUser)
    joinTelecomList!: UserTelecomSchema[];

    @OneToMany((type) => UserEmailSchema, (s) => s.joinStreamUser)
    joinEmailList!: UserEmailSchema[];
}
