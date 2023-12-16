import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, DraftNodeRelation, SMALLINT_PG, INTEGER_PG } from "qqlx-core";
import { RELATIONS_RIVER_DRAFT_NODE_RELATION, ENUM_DRAFT_NODE_RELATION } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";

@Entity({ name: RELATIONS_RIVER_DRAFT_NODE_RELATION })
export class DraftNodeRelationSchema implements DraftNodeRelation {
    @Column({ type: "integer", transformer: new TransformerInteger() })
    pid: INTEGER_PG = -1;

    @Column({ type: "integer", transformer: new TransformerInteger() })
    cid: INTEGER_PG = -1;

    @Column({
        type: "enum",
        enum: ENUM_DRAFT_NODE_RELATION,
        default: ENUM_DRAFT_NODE_RELATION.NONE,
    })
    relation: ENUM_DRAFT_NODE_RELATION = ENUM_DRAFT_NODE_RELATION.NONE;

    // =============================
    // ======= 必要校验 ========
    // =============================
    @BeforeInsert()
    @BeforeUpdate()
    applyTransformations(): void {
        const is_enum_valid = Object.values(ENUM_DRAFT_NODE_RELATION).includes(this.relation);
        if (!is_enum_valid) this.relation = ENUM_DRAFT_NODE_RELATION.NONE;
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
