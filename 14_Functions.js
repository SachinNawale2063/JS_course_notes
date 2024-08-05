function myName(){
    console.log("Sachin Nawale");
}
myName();

function addNumbers(a,b){
    return a + b;
}
console.log(addNumbers(1,2))

function loggedInMsg(username = "sachin"){
    if (!username) {
        console.log("Please enter user name first");
        return 
    }
    return `${username} just logged in`
}
console.log(loggedInMsg("sachin"));
console.log(loggedInMsg());
console.log(loggedInMsg("sanket"));
