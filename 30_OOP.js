// Js is prototyped based language

// OOP : it is a programming paradigm

// parts of OOP : 
// Objest literal

// 4 pillers of OOP:
// 1. abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism


//OBJECT LITERAL ==> (this keyword)
// const user = {
//     username: "sachin",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function () {
//         //console.log('Get user Details');
//         // console.log('UserName: ', `${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.getUserDetails());


// CONSTRUCTOR FUNCTION : it is basically a reference of your function
function User(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    return this        // -----> optional 
}
// const userOne = User('Sachin', 8, true)
// const userTwo = User('Sanket', 8, true)
// console.log(userOne); // value will be overright by sanket therefore we use new keyword instead of only creating copy
const userOne = new User('Sachin', 8, true)
const userTwo = new User('Sanket', 8, true)
console.log(userOne);
console.log(userOne instanceof User);  //true
console.log(userTwo);