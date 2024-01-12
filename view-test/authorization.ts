import { ViewStreamUserEmail } from "../view/stream-user-email";
import { $request } from "../view/utils"

/** 登录之前记得获取一下邮箱验证码
 * @postEmailCode curl -X GET "http://localhost:8003/stream/user/email/code?email=wqao1023@qq.com"
 */
export async function initialRequest () {

    const $view = new ViewStreamUserEmail();
    const info = await $view.login({ code: "2BAD3E" });
    $request.setDefaultHeaders("Authorization", info.authorization);
}