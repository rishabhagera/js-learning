const useremail ="rsA@gm.ai.com"   //"" dont have   //[] true

if(useremail)  //check the value and request result 
{
    console.log("usr got mail"); 
}
else
{
    console.log("dont have email");   
}


// falsy value 
// false,0,-0,bitint 0n,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{}, //empty function -> function(){}

const user=[]
if (user.length === 0)
{
    console.log("array is empty")
}

const emptyobj ={}
if(Object.keys(emptyobj).length === 0)
{
    console.log("object is empty");
}

//chrome console
//false == 0 -> true 
//false =='' -> true
// 0 ==''  -> true



// Nullish Coaleseing operator (??):null undefined

let val1;
// val1=5 ?? 10  -> 5
// val1 = null ?? 10 //->10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //->10 
console.log(val1);


//terniaryoperator

// condition ? true:false

const iceTeapRICE =100

iceTeapRICE <=80 ? console.log("less than 80") :console.log("more than 80")
