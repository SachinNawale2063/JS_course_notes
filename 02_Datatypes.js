let name = "sachin" //string
let age = 22 //Number
let isMarried = false //Boolean

// null => standalone value
// undefined => value not assigned
// symbol => for uniuqness

console.log(typeof(name));
console.log(typeof(null));

let score = "333"
console.log(typeof score);

let conScore = Number(score)
console.log(typeof conScore);
console.log(conScore);

let stringScore = String(conScore);
console.log(typeof stringScore);
console.log(stringScore)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false





