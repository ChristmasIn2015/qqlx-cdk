import { Entity, PrimaryGeneratedColumn, Column, DataSource } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, DraftNode, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_RIVER_DRAFT_NODE, ENUM_POND_LOG } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";

@Entity({ name: RELATIONS_RIVER_DRAFT_NODE })
export class DraftNodeSchema implements DraftNode {
    @Column({ type: "varchar", transformer: new TransformerVarchar50() })
    title: VARCHAR50_PG = "";

    @Column({ type: "varchar", transformer: new TransformerVarchar() })
    richtext: VARCHAR_PG = "";

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
