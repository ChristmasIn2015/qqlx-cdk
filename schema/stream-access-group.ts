import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamAccessGroup, INTEGER_PG, StreamAccess } from "qqlx-core";
import { RELATIONS_STREAM_ACCESS_GROUP } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { StreamAccessSchema } from "./stream-access";

@Entity({ name: RELATIONS_STREAM_ACCESS_GROUP })
export class StreamAccessGroupSchema implements StreamAccessGroup {
    @Column({ transformer: new TransformerVarchar50() })
    uid: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    name: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    desc: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    scope: VARCHAR50_PG = "";

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @OneToMany(() => StreamAccessSchema, (schema: StreamAccessSchema) => schema.joinAccessGroup)
    joinAccessList?: StreamAccess[];

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
