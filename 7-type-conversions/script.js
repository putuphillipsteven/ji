let value = true;
console.log("Before conversion: ", typeof value);

value = String(value)
console.log("After conversion: ", typeof value)

console.log("6" / "3")

let str = "123"
console.log("str ", typeof str)

let num = Number(str)
console.log("num", typeof num)

let strSecond = Number("Those variables are to test the string to number conversions")

console.log(strSecond)

console.log(Number(undefined))
console.log(Number(null))
console.log(Number(true))
console.log(Number(false))
console.log(Number(" q"))

console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("1"))
console.log(Boolean("TESTT"))