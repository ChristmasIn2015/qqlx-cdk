import { Response } from "qqlx-core";
import { getErrorTranslate } from "./error";

/** 校验 Response 200 */
export function getResponseData<T> (response: Response<T>) {
    if (response.code !== 200) throw new Error(response.message);

    return response.data;
}

/** 用 Response 包装函数的返回值 */
export function ToResponse () {
    // ⬇️⬇️仅仅会执行一次

    return function (target: Object | Function, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        // 每次被修饰函数执行，⬇️⬇️都会执行
        const original = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const response = (() => ({ code: -1, data: null, message: "" }))();

            try {
                const data = await original.apply(this, args);
                response.code = 200;
                response.data = data;

            } catch (error) {
                const mess = (error as Error)?.message
                const message = getErrorTranslate(Number(mess))?.message

                // 业务错误
                if (message) {
                    response.code = Number(mess)
                    response.message = message
                }
                // 其他错误
                else {
                    response.message = (error as Error).message;
                }
            } finally {
                return response;
            }
        };

        return descriptor;
    };
}
