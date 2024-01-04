import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamUserAccessGroup, INTEGER_PG, StreamUserAccess } from "qqlx-core";
import { RELATIONS_STREAM_USER_ACCESS, RELATIONS_STREAM_USER_ACCESS_GROUP } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

@Entity({ name: RELATIONS_STREAM_USER_ACCESS })
export class StreamUserAccessSchema implements StreamUserAccess {

    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = '';

    @Column({ transformer: new TransformerInteger() })
    gid: INTEGER_PG = -1;

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
