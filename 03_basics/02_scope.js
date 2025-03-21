//scope
// var c =300 // then also 30
if(true){
    let a=10
    const b=20 
    var c=30    
}


// console.log(a);
// console.log(b);
// console.log(c); // this is the problemof var not in scope then also caan access anywhere 


let abc=300//global
if(true){
    let abc=10 //inner scope
    const bcd=20    
    // console.log('inner',abc);
}
// console.log(abc);

// chrome scope (console) globaland code global is different  


//        ********************part2 scope********************
// closure->htmlpage manuplate

//nested scope
function one()
{
    const username ="rishabh"
    
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);//cant access here 
    two()//username was give there
    // for this a different call stack is build for access 
}
// one()

if(true)
{
    const name="rishabh"
    if(name ==="rishabh")
    {
        const website=" youtube"
        // console.log(name+ website);
    }
    //console.log(website);
}
// console.log(name);


//***************intresting**************
addone(5)

console.log(addone(5))    // this function is declared so can be access from above it 
function addone(num)
{
    return num+1
}
console.log(addone(5))


// addtwo(5)   // this function is in a variable so can be done frome above 
const addtwo = function(num)  //this can also be called as experssion 
{
    return num+2
}

console.log(addtwo(5))

//hosting means execution concept of function where they are declared 