import {
    ConditionList,
    INTEGER_PG,
    PATH_STREAM_USER_ACCESS,
    PATH_STREAM_USER_ACCESS_GROUP,
    PATH_STREAM_USER_EMAIL, PATH_STREAM_USER_EMAIL_CODE,
    StreamUserAccess,
    UserInfo, deleteStreamAccessDto, deleteStreamAccessRes, getStreamAccessDto, getStreamAccessRes, postStreamAccessDto, postStreamAccessRes
} from "qqlx-core";

import { getConditionMatchInteger } from "../lib/search.match"
import { StreamUserAccessSchema } from "../schema-production/stream-user-access";
import { $request } from "./utils";

export class ViewStreamUserAccess {

    schema!: StreamUserAccess

    list: StreamUserAccess[] = []
    conditionList: ConditionList<StreamUserAccess>[] = []

    constructor() {
        this.initialSchema()
    }

    getSchema () {
        return new StreamUserAccessSchema()
    }

    initialSchema (entity?: StreamUserAccess) {
        entity
            ? this.schema = structuredClone(entity)
            : this.schema = new StreamUserAccessSchema()
    }

    async get (gid: INTEGER_PG) {
        const dto: getStreamAccessDto = { gid: getConditionMatchInteger('gid', gid) }
        const res: getStreamAccessRes = await $request.post(`${PATH_STREAM_USER_ACCESS}/get`);
        this.list = res
        return []
    }

    async post (gid: INTEGER_PG) {
        this.schema.gid = gid
        const dto: postStreamAccessDto = { schema: this.schema }
        const res: postStreamAccessRes = await $request.post(PATH_STREAM_USER_ACCESS, dto);
    }

    async delete (id: INTEGER_PG) {
        const dto: deleteStreamAccessDto = { id }
        const res: deleteStreamAccessRes = await $request.delete(PATH_STREAM_USER_ACCESS, dto);
    }
}