import * as verify from "./verify"

const data = [
    null, undefined, NaN,
    "null", "undefined", "NaN",
    1234, "", "success", false,
    {}, new Map(),
    function () { },
]
data.map(mess => {
    console.log("isValidValue:", verify.isValidValue(mess), mess)
})
console.log("------")

data.map(mess => {
    console.log("isObject:", verify.isObject(mess), mess)
})
console.log("------")

data.map(mess => {
    console.log("toNumber 999:", verify.toNumber(mess, 999), mess)
})
console.log("------")

data.map(mess => {
    console.log("toString hello:", verify.toString(mess, "hello"), mess)
})
console.log("------")

data.map(mess => {
    console.log("toBoolean true:", verify.toBoolean(mess), mess)
})
console.log("------")
