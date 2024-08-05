const myArr = ['sachin' ,'sanket', 'Hitesh']

// arrays are resizable

myArr.push('sanket')
console.log(myArr);

myArr.push('aniket')
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf('sachin'));

const newArr = myArr.join(' ')
console.log(newArr);
console.log(typeof newArr);

console.log("A ", myArr); //A  [ 'sachin', 'sanket', 'Hitesh', 'sanket' ]
const myn1 = myArr.slice(1,3)  // the element present at the third index is not included
console.log("Slice ", myn1);  //Slice  [ 'sanket', 'Hitesh' ]
const myn2 = myArr.splice(1,3)   // the element present at the third index is included and also main array also gets change that is its not contains the element from the 1 to 3
console.log("original array ", myArr); //original array  [ 'sachin' ]
console.log("Splice  ", myn2);  //Splice   [ 'sanket', 'Hitesh', 'sanket' ]






