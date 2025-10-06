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

let counter = 1;

console.log(2 * ++counter);

console.log(2 * counter++);

let a11 = 1, b11 = 1;

let c11 = ++a11;
let d11 = b11++;

console.log(`c11: ${c11}`);

console.log(`d11: ${d11}`);

let a12 = 2;

let x12 = 1 + (a12 *= 2);

console.log(`x12: ${x12}`)

console.log(`1. `, "" + 1 + 0);

console.log(`2. `, "" - 1 + 0);

console.log(`3. `, true + false);

console.log(`4. `, 6 / "3");

console.log(`5. `, "2" * "3");

console.log(`6. `, 4 + 5 + "px");

console.log(`7. `, "$" + 4 + 5);

console.log(`8. `, "4" - 2);

console.log(`9. `, "4px" - 2);

console.log(`10. `, "  -9  " + 5);

console.log(`11. `, "  -9  " - 5);

console.log(`12. `, null + 1);

console.log(`13. `, undefined + 1);

console.log(`14. `, " \t \n" - 2);


let ab1 = prompt(`First number: `, 1);

let ab2 = prompt(`Second number: `, 2);

prompt(`The result are: `, Number(ab1) + Number(ab2));