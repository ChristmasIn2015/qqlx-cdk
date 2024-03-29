import { Entity, PrimaryGeneratedColumn, Column, DataSource, OneToMany, JoinColumn, BeforeInsert, OneToOne } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, DraftNode, SMALLINT_PG, INTEGER_PG, DraftNodeRelation } from "qqlx-core";
import { RELATIONS_RIVER_DRAFT_NODE, ENUM_STREAM_LOG } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { DraftNodeRelationSchema } from "./river-draft-node-relation";

import { IdBase } from "../lib/schema";

@Entity({ name: RELATIONS_RIVER_DRAFT_NODE })
export class DraftNodeSchema extends IdBase implements DraftNode {

    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    title: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar() })
    richtext: VARCHAR_PG = "";

    // =============================
    // ======= Shadow JOIN =========
    // =============================

    @OneToOne(() => DraftNodeRelationSchema, e => e.joinParentNode)
    joinParentRelation?: DraftNodeRelation

    @OneToOne(() => DraftNodeRelationSchema, e => e.joinCurrentNode)
    joinCurrentRelation?: DraftNodeRelation
}
