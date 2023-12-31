// Data types Summary in JS
//! Javascript is a dynamically typed language
// Two different types of data types in JS
// 1. Primitive data types
// 2. Non primitive data types

// Primitive data types are immutable
// 7 types of primitive data types
// 1. Number
// 2. String
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol
// 7. BigInt


// * Defining A symbol data type
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) //? Output is false

// * Defining A BigInt data type
const bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber); //? Output is true
// Non primitive data types are mutable

//1. Objects
//2. Arrays
//3. Functions

const heros = ["Shakti-Man", "Doga" , "Nagraj"]
console.log(heros);

let myObj = {
    name : "vinod",
    id :123,
}
const myFunc = function() {
    console.log("Hello World");
}
myFunc()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive data types) , Heap (Non primitive data types)
// Stack is a memory allocation for primitive data types
// Heap is a memory allocation for non primitive data types
// Stack is faster than heap

let a = 10
let b = a
console.log(b); //? Output is 10
a = 20
console.log(b); //? Output is 10 because b takes the value of a at the time of declaration

let c = {
    user : "Vinod",
    upi : "vinod@upi",
}
let d = c
d.upi = "user@upi"
console.log(d)
console.log(c)
