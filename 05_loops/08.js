//reduce
// used in shoping cart 

const mynumbs=[1,2,3]

// const mytotal = mynumbs.reduce( function(acc,curr)
// {
//     console.log(`${acc},${curr}`);
//     return acc+curr
// },0)


const mytotal = mynumbs.reduce((acc,curr) => acc+curr,0)
console.log(mytotal);



const shoppingCart = [
    {
        itemname:"js",
        price:2999
    },
    {
        itemname:"python",
        price:1999
    },
    {
        itemname:"mobile development",
        price:5999
    },
    {
        itemname:"data science",
        price:12999
    },
]
const totalshop = shoppingCart.reduce( (acc,item) =>acc + item.price,0)
console.log(totalshop);
