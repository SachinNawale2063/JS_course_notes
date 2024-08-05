

// {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a); // error
// // console.log(b);  //error
// console.log(c);  //30

let a = 300 
{
    // let a = 30  //this is not similar like outside it treated as different variable in the is scope only
    a = 20 // change the value of global a
}
console.log(a); //30

// LET --> block scope
// CONST --> block scope
// VAR --> Functional scope


