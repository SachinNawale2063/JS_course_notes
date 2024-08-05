function returnPrices(...num1){       // ... => rest operator
    return num1
}

console.log(returnPrices(100,200,300,400));

function returnPrices1(val1, val2, ...num1){       // ... => rest operator
    console.log(val1);
    console.log(val2);
    return num1
}

console.log(returnPrices1(100,200,300,400));
