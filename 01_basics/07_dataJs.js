// Date in JS format
 let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(typeof(myDate));


// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let resetDate = new Date("2023-01-21")
console.log(resetDate.toDateString());

let mytimeStamp = Date.now();
console.log(mytimeStamp);
let resetDate1 = new Date("2023-01-21")
console.log(resetDate1.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());



newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
    
})