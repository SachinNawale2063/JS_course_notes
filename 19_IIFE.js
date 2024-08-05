// IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function connection(){
    console.log("DB CONNECTED");  
})();

(()=>{
    console.log("DB CONNECTED two");  
})();

((db)=>{
    console.log(`DB CONNECTED ${db}`);  
})('mongodb');

// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as 
// it is defined or called in the JavaScript event loop. It is a programming language idiom that uses
//  function scoping to create a lexical scope. 
// IIFEs are useful for several reasons, including:
// Avoiding variable hoisting: IIFEs can prevent variable hoisting from within blocks.
// Protecting against global pollution: IIFEs can help limit the scope of variables to avoid conflicts, especially in large applications.
// Allowing public access to methods: IIFEs can allow public access to methods while keeping variables defined within the function private. 

