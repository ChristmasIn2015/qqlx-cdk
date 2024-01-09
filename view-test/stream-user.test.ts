import { ViewStreamUserEmail } from "../view/stream-user-email";
import { ViewStreamUser } from "../view/stream-user";
import { $request } from "../view/utils";

declare global {
    var Authorization: string;
}

describe("ViewStreamUser", () => {

    /** 登录之前记得获取一下邮箱验证码
     * @postEmailCode curl -X GET "http://localhost:8003/stream/user/email/code?email=wqao1023@qq.com"
     */
    it("CURD", async () => {
        const $suev = new ViewStreamUserEmail()
        const info = await $suev.login({ code: "d30e1b", email: "wqao1023@qq.com" })
        $request.setDefaultHeaders('Authorization', info.authorization)

        const $suv = new ViewStreamUser()
        await $suv.initialUserInfo()
        console.log($suv.userInfo)
        // expect($suv.userInfo?.uuid32?.length).toBeGreaterThan(0)
    }, 1000 * 60);
});