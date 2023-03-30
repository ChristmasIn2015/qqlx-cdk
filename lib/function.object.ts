/** 一个对象的值，如果是字符串，将会被去除空白内容 */
export function trimObject(incoming: Record<string | symbol, any>) {
    if (!incoming) return;

    for (const key in incoming) {
        if (typeof incoming[key] === "string") {
            (incoming[key] as string) = (incoming[key] as string).replace(/\s/g, "");
        }
    }
}
