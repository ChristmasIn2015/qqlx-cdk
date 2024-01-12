import {
    ConditionList,
    PATH_STREAM_USER_ACCESS,
    PATH_STREAM_USER_ACCESS_GROUP,
    PATH_STREAM_USER_EMAIL, PATH_STREAM_USER_EMAIL_CODE,
    StreamUserAccessGroup,
    UserInfo, getStreamAccessGroupDto, getStreamAccessGroupDtoRes, postStreamAccessGroupDto, postStreamAccessGroupRes
} from "qqlx-core";

import { StreamUserAccessGroupSchema } from "../schema-production/stream-user-access-group";
import { $request } from "./utils";

export class ViewStreamUserAccessGroup {

    schema!: StreamUserAccessGroupSchema

    list: StreamUserAccessGroup[] = []
    conditionList: ConditionList<StreamUserAccessGroup>[] = []

    constructor() {
    }

    getSchema () {
        return new StreamUserAccessGroupSchema()
    }

    initialSchema () {
        this.schema = new StreamUserAccessGroupSchema()
    }

    async get () {
        const dto: getStreamAccessGroupDto = null
        const res: getStreamAccessGroupDtoRes = await $request.get(PATH_STREAM_USER_ACCESS_GROUP);
        this.list = res
    }

    async post () {
        const dto: postStreamAccessGroupDto = { schema: this.schema }
        const res: postStreamAccessGroupRes = await $request.post(PATH_STREAM_USER_ACCESS_GROUP, dto);
    }
}