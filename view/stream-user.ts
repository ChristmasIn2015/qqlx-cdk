import { UserInfo } from "qqlx-core";
import { StreamUserSchema } from "../schema-production/stream-user";

export class StreamUserView {

    userInfo!: UserInfo

    constructor() {
    }

    getSchema () {
        return new StreamUserSchema
    }

    setEntity (eneity: UserInfo) {
        this.userInfo = eneity
    }

}