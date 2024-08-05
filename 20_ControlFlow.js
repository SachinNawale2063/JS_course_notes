if(true){
    console.log("Code execute");
}
if (false) {
    console.log("not execute");
}

// COMPARISON OPERATOR : < > <= >= == != 
// CHECK WTIH TYPE ALSO VALUE : ===
// Logical opereator : && ||

const month = 3

switch (month) {
    case 1:
        console.log('january');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('default run');
        break;
}

// falsy values : false, 0, -0, BigInt 0n, "" null, undefined, NaN
// truthy values : "0", 'false', " ", [], {}, function(){}

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log('Object is empty');
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5
val1 = null ?? 10;
console.log(val1); // 10
val1 = undefined ?? 15;
console.log(val1); // 15

// Ternery operator : condition ? true : false
let a = 10
let b = 15
const ans = a<b ? b : a;
console.log(ans); //15

