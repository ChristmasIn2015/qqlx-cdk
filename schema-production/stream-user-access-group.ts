import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeUpdate, BeforeInsert } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamUserAccessGroup, INTEGER_PG, StreamUserAccess, VARCHAR255_PG, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_STREAM_USER_ACCESS, RELATIONS_STREAM_USER_ACCESS_GROUP } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { PgBase } from "../lib/schema";

@Entity({ name: RELATIONS_STREAM_USER_ACCESS_GROUP })
export class StreamUserAccessGroupSchema extends PgBase implements StreamUserAccessGroup {
    @Column({ transformer: new TransformerVarchar50() })
    uuid32: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar50() })
    name: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    desc: VARCHAR255_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    scope: VARCHAR255_PG = "";

    @Column({ transformer: new TransformerSmallInt() })
    droit: SMALLINT_PG = 0;
}
