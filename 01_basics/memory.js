//premitive and non premitive


// stack and heap
/*
stack -> premitive (copy of variable)
heap ->non premitive (reference of variable)
*/

//stack

let myYoutubeName ="RishabhKuchhBhi"

let anothername = myYoutubeName
anothername = "rishabhPlays"
console.log(anothername);
console.log(myYoutubeName);

//heap

let userOne={
    email :"shbh@gmail.com",
    upi:'ok@axishy'
}

let usertwo = userOne
usertwo.email="ris@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);


