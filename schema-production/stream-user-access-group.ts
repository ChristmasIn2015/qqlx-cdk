import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamUserAccessGroup, INTEGER_PG, StreamUserAccess, VARCHAR255_PG, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_STREAM_USER_ACCESS, RELATIONS_STREAM_USER_ACCESS_GROUP } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { IdBase } from "../lib/schema";
import { StreamUserSchema } from "./stream-user";

@Entity({ name: RELATIONS_STREAM_USER_ACCESS_GROUP })
export class StreamUserAccessGroupSchema extends IdBase implements StreamUserAccessGroup {

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

    @Column({ transformer: new TransformerSmallInt() })
    sequence: SMALLINT_PG = 0;

    // =============================
    // ============ JOIN ===========
    // =============================

    @ManyToOne((type) => StreamUserSchema)
    @JoinColumn({ name: "uuid32", referencedColumnName: "uuid32" })
    joinOwner!: StreamUserSchema;
}
