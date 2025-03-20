/*
*/

// console.log('R');
// console.log('I');
// console.log('S');
// console.log('H');
// console.log('A');
// console.log('B');
// console.log('H');

//hard dur to that functons where introduce
//same work in less time

function sayMyName()
{
    console.log('R');
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('A');
    console.log('B');
    console.log('H');
    
}
// sayMyName //execution
// sayMyName() //reference

// function addtwonumber(number1,number2) //parameteres numb1,numb2
// {
//     console.log(number1+number2)
// }
//without return 

function addtwonumber(number1,number2) //parameteres numb1,numb2
{
//     let result = number1+number2
//     return result  //after return nothing would be done 
    //console.log("rishabh");

    return number1+number2

}


// addtwonumber()//nan because no argument given 
const result = addtwonumber(10,20)//10 20 argument 

// console.log("result value ",result);



function loginUserMsg(username) // (username="sam")  // we can alsopovide default values
{
    //if(username=== undefined)
    if(!username)
    {
       console.log("plz enter a user");
       return
    }
    return `${username} just logged in `
}

// console.log(loginUserMsg("rishabh"))//rishabh just logged in)
// console.log(loginUserMsg(""))//just logged in
// console.log(loginUserMsg())//undefine just login 


// function part 2

function calculateCartPrice(...num1)  //rest operator  //[ 200, 400, 500, 2000 ]   
//when function calculateCartPrice(val1,val2,...num1) // 500,200will be in ...num1 and 2 in thair respected variable
{
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))


//function in object 

const user ={
    username:"rishabh",
    price:199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) //compulsory object pass

handleObject({
    username:"sam",
    price:500
})


//function in array

const myNewArr =[200,400,100,600]

function returnsecondvallue(getarray)
{
    return getarray[1]
}
// console.log(returnsecondvallue(myNewArr));

console.log(returnsecondvallue([100,500,450,750]));
