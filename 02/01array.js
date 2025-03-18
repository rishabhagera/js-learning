//array
// 0,1,2->elements
//can contain different datatype as well

// const myarray = [0,1,2,3,4,5,true,'rishabh']
// collection of different items 
// resize able
//start index 0

const myarr = [0,1,2,3,4,5]
console.log(myarr[1]);

/*
when creating a array copy javascript create shallow copy 

2 typeof copy shallow and deep 

 -shallow copy (share the refeence) is like premitive type change in one will create change in old one variable as wellchange in original array as well
 -deep propertites dont share the refeence 
 */

const myHero = ["thor","champiman"]
const myarr2 = new Array(1,2,3,4)

//Array Method

myarr.push(6)
myarr.push(7) // add new values
console.log(myarr);
myarr.pop() // last values 

myarr.unshift(99) // adding at start //give load on computer //all array elements are shifted from their postion  
myarr.shift() //no value is pass here // first element is removed 
console.log(myarr);

//question type in javascript 
console.log(myarr.includes(9));
console.log(myarr.indexOf(6));  // -1 dont know means dosent exists
//if exists then return ndex of that elemet 

const mynewarr = myarr.join() // join binds the elements //converts array into string
console.log(myarr);
console.log(mynewarr);

console.log(typeof mynewarr);


//slice,splice

console.log("A",myarr);

const myn1 =myarr.slice(1,3) // 3 is not included (last in range is not included ) no change take place in array
console.log(myn1);
console.log("B",myarr);


const myn2 =myarr.splice(1,3) // change take place in old array
console.log(myn2);
console.log("C",myarr);



