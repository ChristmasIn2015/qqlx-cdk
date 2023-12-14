import { Entity, PrimaryGeneratedColumn, Column, DataSource } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, PondLog, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_POND_LOG, ENUM_POND_LOG } from "qqlx-core";

@Entity({ name: RELATIONS_POND_LOG })
export class PondLogSchema implements PondLog {
    @Column({ type: "smallint", default: ENUM_POND_LOG.ALL })
    type: ENUM_POND_LOG = ENUM_POND_LOG.ALL;

    @Column({ type: "varchar", length: 50, default: "" })
    title: VARCHAR50_PG = "";

    @Column({ type: "varchar", default: "" })
    text: VARCHAR_PG = "";

    @Column({ type: "smallint", default: -1 })
    duration: SMALLINT_PG = -1;

    // =============================
    // ======= 必须有的字段 ========
    // =============================

    @PrimaryGeneratedColumn({ type: "integer" })
    id: number = -1;

    @Column({ type: "boolean", default: false })
    isDisabled: boolean = false;

    @Column({ type: "bigint", default: "0" })
    timeCreate: BIGINT_PG = "0";

    @Column({ type: "bigint", default: "0" })
    timeUpdate: BIGINT_PG = "0";
}
