const coding =["js","java","python","cpp"]

//higher order function ->call back functions dosent have NAME  
coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach((item)=>{
    // console.log(item);
})


//different perspective 
function print(item)
{
    // console.log(item);
}
coding.forEach(print)


coding.forEach((item ,index,arr ) => {
    // console.log(item , index , arr);
    
})


// [{},{},{}]
//database values are like this thats why

const mycode =[
    {
        languagename:"javascript",
        languagefile:"js"
    },
    {
        languagename:"java",
        languagefile:"java"
    },
    {
        languagename:"python",
        languagefile:"py"
    },
]
mycode.forEach((item)=>{
    console.log(item.languagefile);
})
