const mynumbs = [1,2,3,4,5,6,7,8,9,10]

// const newnumbs = mynumbs.map((num)=> num+10)// map return itself
// console.log(newnumbs);

// mynumbs.forEach((item,index)=> mynumbs[index]=item+10)
// console.log(mynumbs)

myfilter = mynumbs.filter((num)=> {return num+10})   //filter only work on true and false 
// console.log(myfilter)
//problem here 


//chaining using 2 methods togethere like map.map map.filter

const newnumbs = mynumbs
    .map((num)=> num*10)
    .map((num)=>num+1)// num will have the value of first num method
    .filter((num)=> num>=40)
console.log(newnumbs);
