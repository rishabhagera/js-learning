const user={
    username:"rishabh",
    price:999,
    welcomeMeaasge:function(){
        console.log(`${this.username} , welcome to website`);  //current context reffer
        // console.log(this); //current context
        
    }

}

// user.welcomeMeaasge()//current context same after that change 
// user.username="sam"
// user.welcomeMeaasge()//sam

// console.log(this); //empty {} no context in empty   // we are in node environment


//browser ma global object window 


// function chai()
// {
//     let username = "rishabh"
    
//     console.log(this);
//     console.log(this.username);// work only in object not in function // //undefined
    
// }
// chai()   // when this is  called in function at that time request are many and output is given 



// const chai =function ()
// {
    
//     let username = "rishabh"
    
//     // console.log(this);
//     console.log(this.username);// work only in object not in function   //undefined 
    
// }


const chai =()=>{
    let username = "rishabh"
    // console.log(this); {}
    // console.log(this.username);// work only in object not in function //undefined
    }
chai()




//arrowfunction 

// explicite return ()need to write return 

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }

//implicite return 
// const addtwo = (num1,num2)=> num1+num2
// // {}need to write retrun () no need to write   
// const addtwo = (num1,num2)=> (num1+num2)//() no need to write retrun here 

const addtwo = (num1,num2)=> ({username:"rishabh"})

console.log(addtwo(3,4))

