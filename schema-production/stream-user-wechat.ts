import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, INTEGER_PG, UserWeChat, VARCHAR255_PG, StreamUser } from "qqlx-core";
import { RELATIONS_STREAM_USER, RELATIONS_STREAM_USER_WECHAT, RELATIONS_STREAM_USER_TELECOM } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";
import { StreamUserSchema } from "./stream-user";

import { IdBase } from "../lib/schema";

@Entity({ name: RELATIONS_STREAM_USER_WECHAT })
export class UserWeChatSchema extends IdBase implements UserWeChat {

    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    unionId: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    nickname: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    avator: VARCHAR255_PG = "";

    // =============================
    // ============ JOIN ===========
    // =============================

    @ManyToOne((type) => StreamUserSchema, (s) => s.joinWeChatList)
    @JoinColumn({ name: "uuid32", referencedColumnName: "uuid32" })
    joinStreamUser!: StreamUserSchema;
}
