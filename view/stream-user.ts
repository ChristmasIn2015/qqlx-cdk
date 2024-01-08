import { PATH_STREAM_USER, UserInfo, getStreamUserDto } from "qqlx-core";

import { StreamUserSchema } from "../schema-production/stream-user";
import { $request } from "./utils";

export class StreamUserView {

    userInfo!: UserInfo

    constructor() { }


    getSchema () {
        return new StreamUserSchema()
    }

    async initialUserInfo () {
        const dto: getStreamUserDto = null
        this.userInfo = await $request.get(PATH_STREAM_USER)
    }
}