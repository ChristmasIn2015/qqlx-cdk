import {
    PATH_STREAM_USER_EMAIL, PATH_STREAM_USER_EMAIL_CODE,
    UserInfo, patchStreamUserEmailCodeDto, patchStreamUserEmailCodeRes,
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

    async patchCode (dto: patchStreamUserEmailCodeDto): Promise<patchStreamUserEmailCodeRes> {
        await $request.post(PATH_STREAM_USER_EMAIL_CODE, dto);
        return null
    }

    async login (dto: postStreamUserEmailDto): Promise<postStreamUserEmailRes> {
        const info = await $request.post<postStreamUserEmailRes>(PATH_STREAM_USER_EMAIL, dto);
        return info
    }
}