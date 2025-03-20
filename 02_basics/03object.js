//object -> literal(while creating this no single ton is created) 
// constructor ->single ton

// Object.create// constructor

//this full file is of ->>>>>> literal
//Object has key value components which is better than array

// //symbol
const mysym = Symbol("key1")  //adding symbol in object 


const JsUser = {
    name:"rishabh",// taking name as string 
    "Full name":"Rishabh Upadhyay",//cant access this threw .(dot)
    [mysym]:"mykey1",// [] without this it will return string 
    age:22,
    location:"ahmedabad",
    gmail:"rishabh@gmail.com",
    isLoggin:false,
    LastLogin:["Mon","Sat"]
}
// console.log(JsUser.gmail);
// console.log(JsUser["gmail"]);//taking as string 
// console.log(JsUser["Full name"]);
// console.log(JsUser[mysym]);


//change in elements

// JsUser.gmail ="rishabh@google.com"
// console.log(JsUser["gmail"]); 


//lock value

// Object.freeze(JsUser)
// no change are seen after this 
// JsUser.gmail ="rishabh@googlehy.com"
// console.log(JsUser);


//adding function in  javascript
JsUser.greeting = function()
{
    console.log("hello JS USER ");
}

JsUser.greetingtwo = function()
{
    console.log(`hello JS USER ,${this.name}`);//this for acces object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

