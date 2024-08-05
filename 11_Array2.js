const arr1 = [1,2,3]
const arr2 = [4,5,6]

// const newArr1 = arr1.concat(arr2)
const newArr1 = [...arr1, ...arr2]   // ... ==> spread operator

console.log(newArr1);
console.log(newArr1.toString());

const jumbledarray = [1,2,3, [4,5], 6, [2,3, [5,6]], 4]
const simple_array = jumbledarray.flat(Infinity)
console.log(simple_array);

console.log(Array.isArray([1,2,3,4]));
console.log(Array.isArray("Sachin"));
console.log(Array.from("Sachin"));
console.log(Array.from({name:"Sachin"}));  // gives empty array

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));


