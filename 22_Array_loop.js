//for of
const arr = [1,2,3]

for (const element of arr) {
   // console.log(element)
}

//for each
arr.forEach(element => {
   //console.log(element); 
});

const map = new Map()
map.set("a", 1)
map.set("b", 2)
map.set("c", 3)
console.log(map);
for (const [key, value] of map) {
    //console.log(key + ": "+value);
}

const obj = {
    name1 : "Sachin",
    name2 : "Sanket",
    name3 : "Hitesh"
}
//forin
for (const key in obj) {
    //console.log(obj[key]);
}


const arr1 = [1,2,3,4,5,6];
arr1.forEach(value => {
    //console.log(value);
})
function printme(item){
    //console.log(item);
}
arr1.forEach(printme)

arr1.forEach((item, index, arr)=>{
    //console.log(item, index, arr);
})


const data = [
    {
        id : 0,
        name : "javascript"
    },
    {
        id : 1,
        name : "nodejs"
    },
    {
        id : 2,
        name : "mongodb"
    },
]

data.forEach((item)=>{
    console.log(item.id, item.name);
})
