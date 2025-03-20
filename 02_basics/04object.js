// constructor and single ton
//const tinderUser =new Object() // this is single ton object 
const tinderUser ={}    // both are same //this is non single ton
// console.log(tinderUser);

tinderUser.id ="123abc"
tinderUser.name="sammmy"
tinderUser.isloggedin=true

// console.log(tinderUser);

const regularUser ={
    email:"sum@gmail.com",
    fullname:{
        usersfullname:{
            firstname:"rishabh",
            lastname:"upadhyay"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.usersfullname);


const obj1 ={
    1:"a",
    2:"b"
}

const obj2 ={
    3:"a",
    4:"b"
}

// const obj3 = (obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2) // {}=>target and other are source

const obj3={...obj1,...obj2} //spread 
// console.log(obj3);


const user =[
    {
        id:1,
        email:"r@mail.com",
    },{
        id:1,
        email:"r@mail.com",
    },
    {
        id:1,
        email:"r@mail.com",
    }
]
// console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));// array output 

console.log(Object.values(tinderUser));// array output

console.log(Object.entries(tinderUser));// array  inside array in output

console.log(tinderUser.hasOwnProperty('isloggedin'));// checking for properties