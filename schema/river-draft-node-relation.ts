import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, DraftNodeRelation, SMALLINT_PG, INTEGER_PG, FOREIGN_ID, DraftNode } from "qqlx-core";
import { RELATIONS_RIVER_DRAFT_NODE_RELATION, ENUM_DRAFT_NODE_RELATION } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { DraftNodeSchema } from "./river-draft-node";

@Entity({ name: RELATIONS_RIVER_DRAFT_NODE_RELATION })
export class DraftNodeRelationSchema implements DraftNodeRelation {
    @Column({ transformer: new TransformerInteger() })
    pid: INTEGER_PG = -1;

    @Column({ transformer: new TransformerInteger() })
    cid: INTEGER_PG = -1;

    @Column({
        transformer: new TransformerEnum(Object.values(ENUM_DRAFT_NODE_RELATION) as SMALLINT_PG[], ENUM_DRAFT_NODE_RELATION.NONE),
    })
    relation: ENUM_DRAFT_NODE_RELATION = ENUM_DRAFT_NODE_RELATION.NONE;

    // =============================
    // ======= JOIN ========
    // =============================
    @ManyToOne(() => DraftNodeSchema)
    @JoinColumn({ name: "cid" })
    cNode?: DraftNode;

    @ManyToOne(() => DraftNodeSchema)
    @JoinColumn({ name: "pid" })
    pNode?: DraftNode;

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
