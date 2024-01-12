import fs from 'fs'

import { ViewStreamUserEmail } from "../view/stream-user-email";
import { ViewStreamUser } from "../view/stream-user";
import { $request } from "../view/utils";

import { initialRequest } from './authorization';

declare global {
    var Authorization: string;
}

describe("ViewStreamUser", () => {

    beforeAll(() => initialRequest())

    it(
        "CURD",
        async () => {
            const $suv = new ViewStreamUser();
            await $suv.initialUserInfo();
            expect($suv.userInfo?.uuid32?.length).toBeGreaterThan(0)
            expect($suv.userInfo?.joinWeChatList?.length).toBeGreaterThan(-1)
            expect($suv.userInfo?.joinTelecomList?.length).toBeGreaterThan(-1)
            expect($suv.userInfo?.joinEmailList?.length).toBeGreaterThan(-1)
        },
        1000 * 60
    );
});
