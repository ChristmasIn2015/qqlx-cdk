/** 一个对象的值，如果是字符串，将会被去除空白内容 */
export function trimObject(incoming: Record<string | symbol, any>) {
    if (!incoming) return;

    for (const key in incoming) {
        if (["timeCreateString", "timeUpdateString"].findIndex((e) => e === key) > -1) continue;
        if (typeof incoming[key] === "string") {
            (incoming[key] as string) = (incoming[key] as string).replace(/\s/g, "");
        }
    }
}

export function getMongodbBase() {
    return {
        _id: "",
        timeCreate: 0,
        timeCreateString: "",
        timeUpdate: 0,
        timeUpdateString: "",
    };
}
