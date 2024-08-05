const user = {
    name : "sachin",
    price : 12345,
    welcomeMsg : function(){
        console.log(`${this.name} welcome to my website`);
        // console.log(this);
    }
}
user.welcomeMsg()
user.name = "sanket"
user.welcomeMsg()

// console.log(this); //{}

// function chai(){
//     const name = "sachinNawale"
//     console.log(this.name);          //not work in this nomral function
// }
// chai()

const chai = () =>{
    const name = "sachinNawale"
    console.log(this.name);          // not work in this arrow function
}
chai()

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(5,4));

