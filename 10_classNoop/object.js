//prototypal inheritance

function multipleNy5(num)
{
    return num*5
}
multipleNy5.power = 2 

console.log(multipleNy5(5));
console.log(multipleNy5.power);
console.log(multipleNy5.prototype);

function createUser(username,score)
{
    this.username = username
    this.score = score
}

createUser.prototype.increament = function()
{
    this.score++
}

createUser.prototype.printMe = function()
{
    console.log(`price is : ${this.score}`);
    
}

const chai = new createUser("chai",25) //new object is created
const tea =  createUser("tea",250)

chai.printMe()