//premitive and non-preivitev
//access threw memory

//premitive
/* Total 7  - call by value (copy is created) not on them no -- reference of memory
String 
number
boolean
null
undefined
symbol->unique
bigInt(scentific values)
*/

//java script is static / dynamic

let name='rishabh'
let marks=55
let isGoodPerson=true
let city = null //object null
let sign = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// both symbol are different
console.log(id === anotherId);

const bigNumber = 894946848949496848779798613n  // const bigNumber = 89494684894949684 it is said number by n bigint
console.log(bigNumber);
console.log(typeof(bigNumber));

//non premitive
/*reference type memory allocate reference 
array
object
functions
*/

const hero=['rshbh','hiren','akash'];

// //object
// let myobject=
//  {
//     sname :'rishabh',
//     age : 22,
// };

// {
//     name:'rakesh',
//     surname='gajju',
// }


const myfunction= function()
{
    console.log("rishabh");
}

//non premitive datatype return object only but it work differently
console.log(typeof hero);
console.log(typeof myfunction);
// console.log(typeof myobject);
