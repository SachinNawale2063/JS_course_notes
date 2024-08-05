function one(){
    const username = "sachin"
    function two (){
        const website = "myweb.com"
        console.log(username);  // ---> dont throw error
    }
    // console.log(website); ---> throw error because website variable is in the child function 
    two()
}
one()