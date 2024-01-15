import {
    ConditionList,
    PATH_STREAM_USER_ACCESS,
    PATH_STREAM_USER_ACCESS_GROUP,
    PATH_STREAM_USER_EMAIL, PATH_STREAM_USER_EMAIL_CODE,
    StreamUserAccessGroup, UserInfo,
    getStreamAccessGroupDto, getStreamAccessGroupDtoRes, postStreamAccessGroupDto, postStreamAccessGroupRes,
    putStreamAccessGroupDto, putStreamAccessGroupRes, deleteStreamAccessGroupDto, deleteStreamAccessGroupRes, INTEGER_PG
} from "qqlx-core";

import { StreamUserAccessGroupSchema } from "../schema-production/stream-user-access-group";
import { $request } from "./utils";

export class ViewStreamUserAccessGroup {

    schema!: StreamUserAccessGroup

    list: StreamUserAccessGroup[] = []
    conditionList: ConditionList<StreamUserAccessGroup>[] = []

    constructor() {
        this.initialSchema()
    }

    getSchema () {
        return new StreamUserAccessGroupSchema()
    }

    initialSchema (entity?: StreamUserAccessGroup) {
        entity
            ? this.schema = structuredClone(entity)
            : this.schema = new StreamUserAccessGroupSchema()
    }

    async get () {
        const dto: getStreamAccessGroupDto = null
        const res: getStreamAccessGroupDtoRes = await $request.get(PATH_STREAM_USER_ACCESS_GROUP);
        this.list = res
        return res
    }

    async post () {
        const dto: postStreamAccessGroupDto = { schema: this.schema }
        const res: postStreamAccessGroupRes = await $request.post(PATH_STREAM_USER_ACCESS_GROUP, dto);
    }

    async put () {
        const dto: putStreamAccessGroupDto = { entity: this.schema }
        const res: putStreamAccessGroupRes = await $request.put(PATH_STREAM_USER_ACCESS_GROUP, dto);
    }

    async delete (id: INTEGER_PG) {
        const dto: deleteStreamAccessGroupDto = { id }
        const res: deleteStreamAccessGroupRes = await $request.delete(PATH_STREAM_USER_ACCESS_GROUP, dto);
    }
}