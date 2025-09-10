// Unary, binary, and Operand

// Operand is what operators are applied to

let xOne = 5 * 2;

// It have two operands, the left operand is 5, and the right
// operand is 2. Some people call this an arguments.

// An operator is unary if it has a single operand.

let xTwo = 1;

xTwo = -xTwo;

console.log(xTwo);

// The unary negation [-] reverses the sign of a number

// An operator is binary if it has two operands

let xThree = 1;

let yOne = 3;

console.log(xThree - yOne);

console.log(8 % 3);

console.log(2 ** 5);

console.log("John" + " Doe");

console.log("2" + 1);

console.log("2" + 3 * 10);

console.log("2" + 3 + 10);

console.log(3 * 10 + "2");


let aOne = 1;

let bOne = 1;

let cOne = ++aOne;

let dOne = bOne++;

console.log("aOne: ", aOne);

console.log("bOne: ", bOne);

console.log("cOne: ", cOne)

console.log("dOne: ", dOne)

let aTwo = 2;

let xFour = 1 + (aTwo *= 2);

console.log("xFour: ", xFour);

let xFive = "" + 1 + 0;

console.log(typeof xFive, `: ${xFive}`)

let xSix = "" - 1 + 0;

console.log(typeof xSix, `: ${xSix}`);