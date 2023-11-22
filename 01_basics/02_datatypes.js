// "use strict"; //! treat all Js code as newer version

//alert(3 + 3) //? we are using nodejs , not browser
console.log(3 + 
    3); // code must be readable
console.log("Vinod");

// Data types

//* 1. Primitive data types
// a. Number
let n1 = 123;
let n2 = 123.456;
console.log(n1 , n2);

// b. String
let s1 = 'Vinod';
console.log(s1);

// c. Boolean
let b1 = true;
let b2 = false;
console.log(b1, b2);

// d. undefined
let u1;
console.log(u1);

// e. null //! when we use typeof operator on null, it returns object because of a bug in JS
let nu1 = null;
console.log(nu1);

// f. Symbol //! Symbol is a new data type in ES6 , it is used to create unique identifiers
let sym1 = Symbol();
console.log(sym1);

//* 2. Object data type
// a. Object
let o1 = {};
console.log(o1);

// b. Array
let a1 = [];
console.log(a1);

// c. Function
let f1 = function() {};
console.log(f1);

// d. Date
let d1 = new Date();
console.log(d1);

// e. RegExp
let r1 = /abc/;
console.log(r1);

// f. Map  
let m1 = new Map();
console.log(m1);

// g. Set
let st1 = new Set();
console.log(st1);

// h. WeakMap
let wm1 = new WeakMap();
console.log(wm1);
