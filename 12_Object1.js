//singletone
// Object.create()

// object literals

const mySym = Symbol('key1')

const obj = {
    name : "Sachin",
    [mySym] : "myKey1",
    age : 22,
    location : "Mumbai",
    isLoggedIn : false
}

console.log(obj.name);
console.log(obj['name']);
console.log(obj[mySym]);
console.log(typeof obj[mySym]);

obj.name = "sanket"
console.log(obj);
// Object.freeze(obj)
obj.name = "sachin"
console.log(obj);

obj.greetings = function(){
    console.log("Hello Guys!!!");
}
console.log(obj.greetings());



