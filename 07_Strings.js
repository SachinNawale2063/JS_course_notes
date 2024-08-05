console.log('sachin' + 'nawale');
const first = 'sachin'
const last = 'nawale'

console.log(`Hello my name is ${first} ${last}`);

const newString = new String('Sachin Nawale')

console.log(newString.__proto__); //{}
console.log(newString[2]); //c
console.log(newString.length);  //13
console.log(newString.toUpperCase());  // SACHIN NAWALE
console.log(newString.toLowerCase());  // sachin nawale
console.log(newString.charAt(2));  //c
console.log(newString.indexOf('h')); //3

const part = newString.substring(0,4)
console.log(part); //Sach

const part1 = newString.slice(-8,4)
console.log(part1);  // 

const string1 = "     sachin   "
console.log(string1);        //      sachin   
console.log(string1.trim()); //sachin

const part3 = newString.split(' ')
console.log(part3[0]);  //sachin
console.log(part3[1]);  //nawale


