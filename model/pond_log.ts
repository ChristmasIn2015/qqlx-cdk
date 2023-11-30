
import { Entity, PrimaryGeneratedColumn, Column, DataSource } from "typeorm"

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, PondLog } from "qqlx-core"
import { RELATIONS_POND_LOG_NAME, ENUM_POND_LOG } from "qqlx-core"

@Entity({ name: RELATIONS_POND_LOG_NAME })
export class PondLogSchema implements PondLog {

    @Column({ default: ENUM_POND_LOG.ALL })
    type: ENUM_POND_LOG = ENUM_POND_LOG.ALL

    @Column({ default: "" })
    title: VARCHAR50_PG = ""

    @Column({ default: "" })
    text: VARCHAR_PG = ""

    @Column({ default: -1 })
    duration: BIGINT_PG = -1

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @PrimaryGeneratedColumn()
    id: number = -1

    @Column({ default: "" })
    _id: VARCHAR50_PG = ""

    @Column({ default: false })
    isDisabled: boolean = false

    @Column({ default: -1 })
    timeCreate: BIGINT_PG = Date.now()

    @Column({ default: -1 })
    timeUpdate: BIGINT_PG = Date.now()
}