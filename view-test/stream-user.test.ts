import { StreamUserEmailView } from "../view/stream-user-email";
import { StreamUserView } from "../view/stream-user";
import { $request } from "../view/utils";

describe("StreamUser-View", () => {

    // 登录之前记得 curl -X GET "http://localhost:8003/stream/user/email/code?email=wqao1023@qq.com" 获取一下验证码
    it("CURD", async () => {
        const $suev = new StreamUserEmailView()
        const info = await $suev.login({ code: "255097", email: "wqao1023@qq.com" })
        // $request.interceptors.request.use((config) => {
        //     config.headers.Authorization = info.authorization
        //     return config
        // })

        // const $suv = new StreamUserView()
        // await $suv.initialUserInfo()
        // expect($suv.userInfo?.uuid32?.length).toBeGreaterThan(0)
    }, 1000 * 60);
});