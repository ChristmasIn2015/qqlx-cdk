import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, PondLog, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_POND_LOG, ENUM_POND_LOG } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

@Entity({ name: RELATIONS_POND_LOG })
export class PondLogSchema implements PondLog {

    @Column({
        transformer: new TransformerEnum(
            Object.values(ENUM_POND_LOG) as SMALLINT_PG[],
            ENUM_POND_LOG.WARN
        )
    })
    type: ENUM_POND_LOG = ENUM_POND_LOG.WARN;

    @Column({ transformer: new TransformerVarchar50() })
    title: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar() })
    text: VARCHAR_PG = "";

    @Column({ transformer: new TransformerSmallInt() })
    duration: SMALLINT_PG = -1;

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
