const Pname = "rishabh"
const repocount =50
// console.log(Pname + " "+repocount + " this is good")
//old school thing         //not good for today

// backticks
// injecting variable at place 

//string interpolation 
// for printing here ` ` this is used under esc key
console.log(`my name is ${Pname} and my repo count is ${repocount}`);//"" '' cant use here


//chrome 

// const gameName = new String('rishabhfc')
// undefined
// console.log(gameName);
// VM127:1 String {'rishabhfc'}
// undefined
// console.log(typeof gameName);
// VM221:1 object
// undefined

const gameName = new String('rishabh-fc-mscsher-logistics')
console.log(gameName[0]);

console.log(gameName.__proto__);   // to see object

console.log(gameName.length);
console.log(gameName.toLowerCase());// function direct access
console.log(gameName.toUpperCase());

console.log(gameName.charAt('5')); //psition pass index
console.log(gameName.indexOf('a'));//ti find string poition 

console.log();

const newString = gameName.substring(0,4) //rish last value is not included  //ignore negative
console.log(newString);

const anotherstring = gameName.slice(-9,4) // can provide negative values
console.log(anotherstring);

const newStringOne ="      rishabh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove all unwanted spcae 

const url ="https://rishabh.com/rishabh%20upadhyay"
console.log(url.replace("%20",'-'));


console.log(url.includes("rishabh"));//true and false


//split and make  array

const gameNamee = new String('rishabh-fc-mscsher-logistics')
console.log(gameNamee.split('-'));
