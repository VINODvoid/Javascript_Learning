const score = 400123;
const balance = new Number(400);
// console.log(balance); //? output is [Number: 400] because balance is an object
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(6));

const hundreds = 100000000;
//console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++ Maths  ++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.min(4,67,4,2,-1));
// console.log(Math.max(4,67,4,2,-1));

console.log(Math.round((Math.random()*10) +1 ));

const min = 1
const max = 6
console.log((Math.random( ) *(max -min +1) + min)) ;