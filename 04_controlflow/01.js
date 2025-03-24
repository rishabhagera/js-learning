// if(2=="2")   //string and number
// {
//     console.log("executed");
// }

// if(2!=3)   //string and number
// {
//     console.log("executed");
// }

// if(2==="2")   //strict check
// {
//     console.log("executed");
// }



// const temprature = 41

// if(temprature < 50)
// {
//     console.log("temprature is less than 50");
// }
// else
// {
//     console.log("more than 50");
// }


// const score = 200

// if(score>100)
// {
//     const power="fly"
//     console.log(`userpower :${power}`);
    
// }
// console.log(`userpower :${power}`);
   
const balance =1000

// if(balance>500) console.log("test done");  //implicite scope

// if(balance>500) console.log("test done"),
// console.log("test 2");  //implicite scope   //do not like this 


// //nested if else 
// if(balance < 500)
// {
//     console.log("lessthan 500");
// }
// else if(balance <750)
// {
//     console.log("less than 750");  
// }
// else 
// {
//     console.log("less than 1200");
    
// }


// reallife

const userLoggedIN =true
const debitCard =true
const loggedInFromGoogle= false
const loggedInFromMail =true

if(userLoggedIN && debitCard)//if anything get false code will not execute 
{
    console.log("allowed");
}

if(loggedInFromGoogle || loggedInFromMail)
{
    console.log("user logged in ");
}