//start date 1-1-1970

// const myDate = new Date()

// console.log(typeof myDate);// object 

// console.log(myDate.toString()); //string Tue Mar 18 2025 17:11:46 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()); // 2025-03-18T11:41:46.468Z

// console.log(myDate.toJSON()); // 2025-03-18T11:41:46.468Z

// console.log(myDate.toDateString()); // string but no time date only /// Tue Mar 18 2025

// console.log(myDate.toLocaleString()); // proper laptop type ///3/18/2025, 5:11:46 PM

// console.log(myDate.toLocaleDateString());// 3/18/2025

// let myCreatedDate =new Date(2023,0,23) //months start from 0 in js
// console.log(myCreatedDate.toDateString());

// // let myCreatedDate1 =new Date(2023,0,23,5,3) //months start from 0 in js
// // let myCreatedDate1 =new Date("2023-01-23") //specific date
let myCreatedDate1 =new Date("01-14-2023") 
// console.log(myCreatedDate1.toLocaleString());



//time

// let mytimestamp =Date.now()
// console.log(mytimestamp);  //longint return 
// console.log(myCreatedDate1.getTime());

// console.log(Math.floor(Date.now()/1000)); // converts in seconds

let newDate =new Date()
console.log(newDate.toString());
console.log(newDate.getDay());//start 1

// for  months +1

console.log(newDate.toLocaleString())//normal

console.log(newDate.toLocaleString('default',{ dateStyle:'full'})); /// here object is created in tolocalstring //we caan change here 
