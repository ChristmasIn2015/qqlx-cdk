import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

import type { VARCHAR50_PG, BIGINT_PG, VARCHAR_PG, PgTestTuple, SMALLINT_PG, VARCHAR255_PG, INTEGER_PG } from "qqlx-core";
import { RELATIONS_STREAM_LOG, ENUM_STREAM_LOG, RELATIONS_PG_TEST_TUPLE, ENUM_PG_TEST_TUPLE } from "qqlx-core";

import { TransformerSmallInt, TransformerInteger, TransformerBigInteger } from "../lib/transfor.number";
import { TransformerVarchar, TransformerVarchar50, TransformerVarchar255 } from "../lib/transfor.string";
import { TransformerBoolean } from "../lib/transfor.boolean";
import { TransformerEnum } from "../lib/transfor.enum";
import { NotFunction } from "../lib/verify";

@Entity({ name: RELATIONS_PG_TEST_TUPLE })
export class PgTestTupleSchema implements PgTestTuple {
    @Column({
        transformer: new TransformerEnum(Object.values(ENUM_PG_TEST_TUPLE) as SMALLINT_PG[], ENUM_PG_TEST_TUPLE.DEFAULT),
    })
    enum_small_int: ENUM_PG_TEST_TUPLE = ENUM_PG_TEST_TUPLE.DEFAULT;

    @Column({ transformer: new TransformerVarchar50() })
    str_50: VARCHAR50_PG = "";

    @Column({ transformer: new TransformerVarchar255() })
    str_255: VARCHAR255_PG = "";

    @Column({ transformer: new TransformerVarchar() })
    str: VARCHAR_PG = "";

    @Column({ transformer: new TransformerInteger() })
    num_4: INTEGER_PG = -1;

    @Column({ transformer: new TransformerBigInteger() })
    num_8: BIGINT_PG = "0";

    @Column({ transformer: new TransformerBoolean() })
    boolean_default: Boolean = false;

    // =============================
    // ==== 插入之前不能是函数 ====
    // =============================

    @BeforeInsert()
    notFunction () {
        for (const k in this) {
            if (typeof this[k] === 'function') {
                //@ts-ignore
                this[k] = this[k].toString()
            }
        }
    }

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
