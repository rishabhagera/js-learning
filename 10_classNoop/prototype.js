// let myName = "Rishabh     "
// //console.log(myName.length);
// //console.log(myName.trim().length);

// console.log(myName.trueLength);

let myhero =["thor","captain"]

let heropower = {
    thor:"hammer",
    captain:"shild",

    getCaptainPower: function(){
        console.log(`captain power is he can fight with shield : ${this.captain}`);
    } 
}

//created a prototype
Object.prototype.rishabh =function()
{
    console.log("rishabh is present in all object");
    
}

Array.prototype.hyrishabh = function()
{
    console.log("rishabh is saying hello");
}

// heropower.rishabh()
//myhero.rishabh()

//myhero.hyrishabh()
// heropower.hyrishabh()//dont have access of array prototype in object


//inheritance

const user={
    username:"chai",
    email:"chai.mail.com"
}
const teacher ={
    makevideo:true
}

const teachingSupport={
    isavailable:false
}

const tasupport={
    makeassignment:"js assignment",
    fulltime:true
    //__proto__: teachingSupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)


let anotherusername = "javascriptlearning        "

String.prototype.truelength = function()
{
    console.log(`${this}`);
    //console.log(`${this.name}`); //no access now
    console.log(`true length is :${this.trim().length}`);
}

anotherusername.truelength()

"rishabh upadhyay".truelength()
"icetea".truelength()