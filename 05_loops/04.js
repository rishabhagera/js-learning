const myobj =
{
    js:"javascript",
    cpp:"C++",
    RB:"Rubby",
    swift:"swift by apple"
}

for (const key in myobj) {
    // console.log(key);
    // console.log(myobj[key]); //direct value in output
    // console.log(`${key} shortcut is for ${myobj[key]}`);   
}

const muarr =["js","rubby","java","cpp"]
for(const key in muarr)
{
//     console.log(key); //array has keys to like start  from 1 thats why objects were created
//     console.log(muarr[key]);
}

const map =new Map()
map.set('IN','India')
map.set('USA',"United state of america")
map.set('AUS',"Australia")

//it is not ittretable
for (const key in map)
{
    //console.log(key);
}
//no output