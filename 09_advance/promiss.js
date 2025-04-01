const promiseOne = new Promise(function (resolve,reject){
    //do and async task
    //db call , cryptography,network
    setTimeout(function()
{
    console.log('p1 : Aync task complete');
    resolve()
},1000)

})  
promiseOne.then(function(){
    console.log('P1 :promise consumed');
    
}) //directconection with resolve 


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('p2 :async task 2');
        resolve()
    },1000)
}).then(function()
{
    console.log('p2 :async 2 resolved');
})


const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"rishabh",email:"rishabh@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log("p3 ",user);
})


//4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error)
        {
            resolve({username:"rishabh",password:"123"})
        }
        else{
            reject('Error : something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log("p4 ",user);
    return user.username
})
.then((username)=>{
    console.log("p4 :",username);
})
.catch(function(error){
    console.log("p4: ",error);
})
.finally(()=> console.log("finally the promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error)
        {
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('Error : In JS something went wrong')
        }      
    },1000)   
})

async function consumedPromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
    }catch(error)
    {
        console.log(error);
    }
}
consumedPromiseFive()

async function getAllUsers(){
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(error)
    {
        console.log("E: ",error);
    }
}
//getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))


//fetch lecture 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

