import {
    PATH_STREAM_USER_EMAIL, PATH_STREAM_USER_EMAIL_CODE,
    UserInfo, getStreamUserEmailCodeDto, getStreamUserEmailCodeRes,
    postStreamUserEmailDto, postStreamUserEmailRes,
} from "qqlx-core";

import { UserEmailSchema } from "../schema-production/stream-user-email";
import { $request } from "./utils";

export class ViewStreamUserEmail {

    schema!: UserEmailSchema

    constructor() {
    }

    getSchema () {
        return new UserEmailSchema()
    }

    initialSchema () {
        this.schema = new UserEmailSchema()
    }

    async postEmailCode (dto: getStreamUserEmailCodeDto): Promise<getStreamUserEmailCodeRes> {
        await $request.post(PATH_STREAM_USER_EMAIL_CODE, dto);
        return null
    }

    async login (dto: postStreamUserEmailDto): Promise<postStreamUserEmailRes> {
        const info = await $request.post<postStreamUserEmailRes>(PATH_STREAM_USER_EMAIL, dto);
        return info
    }
}