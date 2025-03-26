//for of
//higher order


// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world!"
for (const great of greetings)
{
    if(great==" ")
    {
        continue
    }
    // console.log(`each character is :${great}`);
}


//maps one type of array  just like object // cant add duplicate 

const map =new Map()
map.set('IN','India')
map.set('USA',"United state of america")
map.set('AUS',"Australia")

// console.log(map);

// for (const key of map)
// {
//     console.log(key);
    
// }

// OUTPUT LIKE THIS 
// [ 'IN', 'India' ]
// [ 'USA', 'United state of america' ]
// [ 'AUS', 'Australia' ]


for (const [key,value] of map)
{
    // console.log(key,":-",value);
}
// IN :- India
// USA :- United state of america
// AUS :- Australia

const myobj={
    game1:'nfs',
    game2:"fry cry 2"
}
// for (const [key,value] of myobj)
// {
//     console.log(key,value);
    
// }
//dont obj here not itritable


//map can be ittritable