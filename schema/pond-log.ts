import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, PondLog, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_POND_LOG, ENUM_POND_LOG } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";

@Entity({ name: RELATIONS_POND_LOG })
export class PondLogSchema implements PondLog {
    @Column({
        type: "enum",
        enum: ENUM_POND_LOG,
        default: ENUM_POND_LOG.ALL,
    })
    type: ENUM_POND_LOG = ENUM_POND_LOG.ALL;

    @Column({ type: "varchar", transformer: new TransformerVarchar50() })
    title: VARCHAR50_PG = "";

    @Column({ type: "varchar", transformer: new TransformerVarchar() })
    text: VARCHAR_PG = "";

    @Column({ type: "smallint", transformer: new TransformerSmallInt() })
    duration: SMALLINT_PG = -1;

    // =============================
    // ======= 必要校验 ========
    // =============================
    @BeforeInsert()
    @BeforeUpdate()
    applyTransformations(): void {
        const is_enum_valid = Object.values(ENUM_POND_LOG).includes(this.type);
        if (!is_enum_valid) this.type = ENUM_POND_LOG.WARN;
    }

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @PrimaryGeneratedColumn({ type: "integer" })
    id!: number;

    @Column({ type: "boolean", transformer: new TransformerBoolean() })
    isDisabled: boolean = false;

    @Column({ type: "bigint", transformer: new TransformerBigInteger() })
    timeCreate: BIGINT_PG = Date.now().toString();

    @Column({ type: "bigint", transformer: new TransformerBigInteger() })
    timeUpdate: BIGINT_PG = Date.now().toString();
}
