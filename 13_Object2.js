const user = {
    email: "some@gmail.com",
    name: {
        userfullname: {
            firstName: "Sachin",
            lastName: "Nawale"
        }
    }
}

console.log(user.name.userfullname);
console.log(user.name.userfullname.firstName);

const obj1 = {0:'a', 1:'b'}
const obj2 = {2:'c', 3:'d'}
const obj3 = {obj1, obj2}
console.log(obj3);
const obj4 = {...obj1, ...obj2}
console.log(obj4);
const obj5 = Object.assign({},obj1,obj2)
console.log(obj5);

const users = [
    {
        id : 0,
        name : "sachin"
    },
    {
        id : 1,
        name : "Sanket"
    },
    {
        id : 2,
        name : "Hitesh"
    }
]
console.log(users[1].name);

const user1 = {
    email: "some@gmail.com",
    name: {
        userfullname: {
            firstName: "Sachin",
            lastName: "Nawale"
        }
    }
}
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(user1.hasOwnProperty('email'));
console.log(user1.hasOwnProperty('email2'));


const course = {
    name : "DSA",
    price : 10253
}
const {name: courseName, price: coursePrice} = course
console.log("Course Name: ",courseName);
console.log("Price: ",coursePrice);



