import { ENUM_ERROR_CODE, NumberTransOption } from "qqlx-core"

const MAP_ENUM_ERROR_CODE = new Map<ENUM_ERROR_CODE, NumberTransOption>();
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.AUTHORIZED_NONE, { value: ENUM_ERROR_CODE.AUTHORIZED_NONE, message: "尚未登陆" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.AUTHORIZED_BELOW, { value: ENUM_ERROR_CODE.AUTHORIZED_BELOW, message: "当前身份认证已过期" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.AUTHORIZATION_BELOW, { value: ENUM_ERROR_CODE.AUTHORIZATION_BELOW, message: "您在此主体中的权限不足，请联系主体管理员调整权限" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.REMAINDER_BELOW, { value: ENUM_ERROR_CODE.REMAINDER_BELOW, message: "剩余可用时间已不足" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.NOT_FOUND_USER, { value: ENUM_ERROR_CODE.NOT_FOUND_USER, message: "找不到此用户" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.NOT_FOUND_BRAND, { value: ENUM_ERROR_CODE.NOT_FOUND_BRAND, message: "找不到此主体" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.UNKNOWN, { value: ENUM_ERROR_CODE.UNKNOWN, message: "未知错误，请重新试试" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.BUSY_REMOTE_WECHAT, { value: ENUM_ERROR_CODE.BUSY_REMOTE_WECHAT, message: "微信：系统繁忙，请重新试试" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.MESS_REMOTE_WECHAT, { value: ENUM_ERROR_CODE.MESS_REMOTE_WECHAT, message: "微信：不理想的返回值" });

const getErrorTranslate = function (code: ENUM_ERROR_CODE): NumberTransOption | null {
    return MAP_ENUM_ERROR_CODE.get(code) || null
}
export { MAP_ENUM_ERROR_CODE, getErrorTranslate };