
import { Entity, PrimaryGeneratedColumn, Column, DataSource } from "typeorm"

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, PondLog } from "qqlx-core"
import { RELATIONS_POND_LOG_NAME, ENUM_POND_LOG } from "qqlx-core"

@Entity({ name: RELATIONS_POND_LOG_NAME })
export class PondLogSchema implements PondLog {

    @Column({ type: "smallint", default: ENUM_POND_LOG.ALL })
    type: ENUM_POND_LOG = ENUM_POND_LOG.ALL

    @Column({ type: 'varchar', length: 50, default: "" })
    title: VARCHAR50_PG = ""

    @Column({ type: 'varchar', default: "" })
    text: VARCHAR_PG = ""

    @Column({ type: "bigint", default: BigInt(-1) })
    duration: BIGINT_PG = BigInt(-1)

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @PrimaryGeneratedColumn({ type: "integer" })
    id: number = -1

    @Column({ type: 'varchar', length: 50, default: "" })
    _id: VARCHAR50_PG = ""

    @Column({ type: "boolean", default: false })
    isDisabled: boolean = false

    @Column({ type: "bigint", default: BigInt(Date.now()) })
    timeCreate: BIGINT_PG = BigInt(Date.now())

    @Column({ type: "bigint", default: BigInt(Date.now()) })
    timeUpdate: BIGINT_PG = BigInt(Date.now())
}