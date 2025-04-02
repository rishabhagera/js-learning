// Object literal
const user = {
    username :"rishabh",
    loginCount : 8,
    signedIn:true,

    getUserDetail: function()
    {
        //onsole.log("got deatils from database");
        //console.log(`UserName :${this.username}`);
        console.log(this); 
    }

}

console.log(user.username);
//console.log(user.getUserDetail());

console.log(this); //{} but it changes because of gloabl events
// in chrome -> this global context has many things node has less


// constructor function

//const promiseOne = new Promise()
//const date = new Date()

//new --> constructor function

function Users(username,logincount,isloggedin)
{
    this.username= username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    this.greeting = function()
    {
        console.log(`welcome ${this.username}`);
    }

    return this //implicite define not always to writen 
}
// this.username is variable and username is value enter by us 

const userOne = new Users("rishabh",12,true)
const userTwo = new Users("SCRIPT",11,false)


console.log(userOne);
console.log(userOne.constructor);
//constructor is refference of own
//console.log(userTwo);

// when new key word writen a empty space is created and a object is created 

