import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamAccess, INTEGER_PG, StreamAccessGroup } from "qqlx-core";
import { RELATIONS_STREAM_ACCESS, ENUM_STREAM_ACCESS } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";
import { StreamAccessGroupSchema } from "./stream-access-group";

@Entity({ name: RELATIONS_STREAM_ACCESS })
export class StreamAccessSchema implements StreamAccess {
    @Column({ transformer: new TransformerInteger() })
    gid: INTEGER_PG = -1;

    @Column({
        transformer: new TransformerEnum(Object.values(ENUM_STREAM_ACCESS) as ENUM_STREAM_ACCESS[], ENUM_STREAM_ACCESS.READONLY),
    })
    type: ENUM_STREAM_ACCESS = ENUM_STREAM_ACCESS.READONLY;

    // =============================
    // ======= JOIN ========
    // =============================

    @ManyToOne(() => StreamAccessGroupSchema)
    joinAccessGroup: StreamAccessGroup;

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
