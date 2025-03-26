//iteration and loopm are same things 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5)
    {
        // console.log("5 is best number");
    }
    // console.log(element);
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop : ${i}`);
    for(let j = 1; j<=10;j++)
    {
        // console.log(`inner loop: ${j}, outer loop: ${i}`);
       // console.log(i + " * " + j +" = "+ i*j );
    }
}

let number1=12
for (let i = 1; i <= 10; i++) {
   // console.log(number1 + " * " + i + " = " + number1*i );
}


let myarray = ["superman","batman","flash"]
// console.log(myarray.length);// 0 1 2   = cant be used at that time undefined will come 
 for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
   // console.log(element);
}


// no need to print alldata on one page  break that condition [break and continue]

for (let index = 1; index <=20; index++) {
    if(index == 5)
    {
        console.log('detected 5');
        break; //break and outof scope 
    }

    //console.log(`value of i is  :${index}`);
}


for (let index = 1; index <=20; index++) {
    if(index == 5)
    {
        console.log('detected 5');
        continue; //ignore the process and start the process from pause 
    }

    console.log(`value of i is  :${index}`);
}