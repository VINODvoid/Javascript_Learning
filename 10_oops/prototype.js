// let myName = "Vinod    "
// function trueLength(str)
// {
    
//     actualLenght = str.trim().length;
//     return actualLenght;
// }
// // console.log(myName.trim().length);

// console.log(trueLength(myName));




let myHeros = ['thor','spiderMan']

let heroPower = {
    thor:'Hammer',
    spiderMan:'sling',
    getsSpider:function()
    {
        console.log(`Spidy `);
    }
}

Object.prototype.vinod = function()
{
    console.log('vinod is present in all objects');
}


heroPower.vinod();
myHeros.vinod();

Array.prototype.heyNitesh = function()

{
    console.log('hey nitesh');
}
// heroPower.heyNitesh();
myHeros.heyNitesh();

const Teacher = {
    makeVideo : true
}
const TeachingSupport=
{
    isValiable  : false,
    __proto__ : Teacher
}



Object.setPrototypeOf(TeachingSupport,Teacher);


let anotherUserName = "Kalki        "
String.prototype.trueLength = function()
{
    return this.trim().length;

}
console.log(anotherUserName.trueLength());