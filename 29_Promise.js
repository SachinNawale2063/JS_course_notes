const promiseOne = new Promise(function (resolve, reject) {
    // DO an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise Consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async task two');
        resolve();
    }, 1000)
}).then(function () {
    console.log('async task 2 resolved');
})


const promiseThree = new Promise(function (res, rej) {
    setTimeout(function () {
        res({ username: "sachin nawale", email: "sachin@gmail.com" });
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "sachin", pass: "123" })
        } else {
            reject("ERROR: user is not authenticated")
        }
    }, 1000)
})
promiseFour.then(function (data) {
    console.log(data);
    return data.username;
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", pass: "123" })
        } else {
            reject("ERROR: js went wrong")
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response1 = await promiseFive
        console.log(response1);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

const api = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error', error);
    }
}
api()

fetch('https://fakestoreapi.com/products')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })