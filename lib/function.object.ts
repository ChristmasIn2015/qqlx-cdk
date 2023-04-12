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

// 网上复制的，获取中文金额
export function getChineseMoney(n: number) {
    var fraction = ["角", "分"];
    var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    var unit = [
        ["元", "万", "亿"],
        ["", "拾", "佰", "仟"],
    ];
    var head = n < 0 ? "欠" : "";
    n = Math.abs(n);

    var s = "";

    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "");
    }
    s = s || "整";
    n = Math.floor(n);

    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = "";
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
    }
    return (
        head +
        s
            .replace(/(零.)*零元/, "元")
            .replace(/(零.)+/g, "零")
            .replace(/^整$/, "零元整")
    );
}
