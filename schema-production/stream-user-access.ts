import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamUserAccessGroup, INTEGER_PG, StreamUserAccess } from "qqlx-core";
import { RELATIONS_STREAM_USER_ACCESS, RELATIONS_STREAM_USER_ACCESS_GROUP } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { IdBase } from "../lib/schema";
import { StreamUserSchema } from "./stream-user";
import { StreamUserAccessGroupSchema } from "./stream-user-access-group";

@Entity({ name: RELATIONS_STREAM_USER_ACCESS })
export class StreamUserAccessSchema extends IdBase implements StreamUserAccess {

    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerInteger() })
    gid: INTEGER_PG = -1;

    // =============================
    // ============ JOIN ===========
    // =============================

    @ManyToOne((type) => StreamUserSchema)
    @JoinColumn({ name: "uuid32", referencedColumnName: "uuid32" })
    joinOwner!: StreamUserSchema;

    @ManyToOne((type) => StreamUserAccessGroupSchema)
    @JoinColumn({ name: "gid", referencedColumnName: "id" })
    joinStreamUserAccessGroup!: StreamUserAccessGroupSchema;
}
