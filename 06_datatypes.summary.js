// Primitive Datatypes :
// String, Number, Boolean, Null, undefined, Symbol, BigInt

// Reference Type or Non Primitive  : 
// Arrays, Object, Functions

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need 
// to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const abc = ['A', 'B', 'C']
const myObj = {
    name : "sachin",
    age : 21
}
const myFunc = function(){
    console.log("Hello i am function");
}

console.log(typeof abc); //object
console.log(typeof myObj); //object
console.log(typeof myFunc); //function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  Heap(Non Primitive)

// Stack Memory Example
let name = "sachin"
let anotherName = name
anotherName = "sanket"
console.log(name); // sachin
console.log(anotherName); //sanket

// Heap Memory example
let obj1 = {
    name : "sachin",
    age :22
}
let obj2 = obj1
obj2.name = "sanket"
console.log(obj1.name); //sanket
console.log(obj2.name); //sanket
