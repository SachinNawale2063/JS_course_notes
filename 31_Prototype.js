// js dfault behavior is prototypal

function mul(num){
    return num*5
}

mul.power = 2;
console.log(mul(5));
console.log(mul.power);
console.log(mul.prototype); 