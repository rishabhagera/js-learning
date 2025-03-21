//immediately invoked function experssion (iife)

//iife means function calls immediately , global scope polution that why -> variable declaration  remove 

// function written immediately

(function chai () //named iife
{
    console.log('db connected');
    
})();// end execution of this function 

//()  1->function defination 
//() 2 ->function execution 

((name) => {   //simple iife
    console.log(`db update ${name} `);
})("rishabh")