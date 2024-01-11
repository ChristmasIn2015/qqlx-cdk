import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, DraftNodeRelation, SMALLINT_PG, INTEGER_PG, FOREIGN_ID, DraftNode } from "qqlx-core";
import { RELATIONS_RIVER_DRAFT_NODE_RELATION, ENUM_DRAFT_NODE_RELATION } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { IdBase } from "../lib/schema";

@Entity({ name: RELATIONS_RIVER_DRAFT_NODE_RELATION })
export class DraftNodeRelationSchema extends IdBase implements DraftNodeRelation {

    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerInteger() })
    pid: INTEGER_PG = -1;

    @Column({ transformer: new TransformerInteger() })
    cid: INTEGER_PG = -1;

    @Column({ transformer: new TransformerBoolean() })
    isRoot: Boolean = false;

    @Column({
        transformer: new TransformerEnum(Object.values(ENUM_DRAFT_NODE_RELATION) as SMALLINT_PG[], ENUM_DRAFT_NODE_RELATION.NONE),
    })
    relation: ENUM_DRAFT_NODE_RELATION = ENUM_DRAFT_NODE_RELATION.NONE;

    @Column({ transformer: new TransformerInteger() })
    sequence: SMALLINT_PG = 0;
}
