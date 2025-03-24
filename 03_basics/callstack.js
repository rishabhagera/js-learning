//call stack code in used in browser (source -> snippet) 

function one()
{
    console.log("one")
    two()
}
function two ()
{
    console.log("two")
    three()
}
function three()
{
    console.log("three")
}

one()
two()
three()