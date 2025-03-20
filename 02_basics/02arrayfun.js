//array methods
const Mcuheros = ["thor","hulk","loki"]
const Dcheros = ["superman","greenlantan","flash"]


// Mcuheros.push(Dcheros) // [ 'thor', 'hulk', 'loki', [ 'superman', 'greenlantan', 'flash' ] ] // whole dc push is  consider as element in array 
// console.log(Mcuheros[3][0]);

//concat
// const allheros=Mcuheros.concat(Dcheros)
// console.log(allheros);
//[ 'thor', 'hulk', 'loki', 'superman', 'greenlantan', 'flash' ]


//spread 
const Allheros = [...Mcuheros,...Dcheros]
console.log(Allheros);


//
const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray);

console.log(Array.isArray("Rishabh"))  // is it present or not
console.log(Array.from("Rishabh")) 
console.log(Array.from({name:"rishabh"})) //cant convert this directly
//intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//of set of elements
