const arr = [1,2,3,4,5,6]

const sum = arr.reduce((prev, curr)=>{
    return prev+curr;
})
// console.log(sum);
const multiplication = arr.reduce((prev,curr,idx,arr)=>{
    // console.log(prev,curr,idx,arr);
    return prev*curr;
})
// console.log(multiplication);

//add 10 to all
const tenArr = arr.map((num)=>num+10)
// console.log(tenArr);

const greaterThanFour = arr.filter((num)=>{
    return num>4;
})
// console.log(greaterThanFour);

const data = [
    {
        id : 0,
        name : "javascript",
        price : 100
    },
    {
        id : 1,
        name : "nodejs",
        price : 200
    },
    {
        id : 2,
        name : "mongodb",
        price : 300
    },
    {
        id : 3,
        name : "english",
        price : 400
    },
    {
        id : 4,
        name : "react",
        price: 500
    },
]

console.log(data);

// find book with id = 4 or having name is english
const data1 = data.filter(item => item.id==4 || item.name=='english')
console.log(data1);

// find total price of all the books
const total_price = data.reduce((acc,item)=>acc+item.price, 0)
console.log(total_price);