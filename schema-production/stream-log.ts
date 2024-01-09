import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, StreamLog, SMALLINT_PG } from "qqlx-core";
import { RELATIONS_STREAM_LOG, ENUM_STREAM_LOG } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";

import { PgBase } from "../lib/schema";

@Entity({ name: RELATIONS_STREAM_LOG })
export class StreamLogSchema extends PgBase implements StreamLog {
    @Column({
        transformer: new TransformerEnum(Object.values(ENUM_STREAM_LOG) as SMALLINT_PG[], ENUM_STREAM_LOG.WARN),
    })
    type: ENUM_STREAM_LOG = ENUM_STREAM_LOG.WARN;

    @Column({ transformer: new TransformerVarchar50() })
    title: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar() })
    text: VARCHAR_PG = "";

    @Column({ transformer: new TransformerSmallInt() })
    cpu: SMALLINT_PG = -1;

    @Column({ transformer: new TransformerSmallInt() })
    memery: SMALLINT_PG = -1;

    @Column({ transformer: new TransformerSmallInt() })
    duration: SMALLINT_PG = -1;
}
