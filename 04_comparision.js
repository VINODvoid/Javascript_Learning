// console.log(2<1); // Output is false
// console.log(2>1); // Output is true
// console.log(2<=1); // Output is false
// console.log(2>=1); // Output is true
// console.log(2==1); // Output is false
// console.log(2!=1); // Output is true
// console.log(2===1); // Output is false

console.log("2" > 1); // Output is true
console.log("02" > 1); // Output is true

console.log(null > 0) // Output is false
console.log(null == 0) // Output is false
console.log(null >= 0) // Output is true

console.log(undefined > 0) // Output is false
console.log(undefined == 0) // Output is false
console.log(undefined >= 0) // Output is false

console.log(NaN > 0) // Output is false
console.log(NaN == 0) // Output is false    
console.log(NaN >= 0) // Output is false

//? Strict check
//? because it will check the type also
console.log("2" === 2); // Output is false 
console.log("2" !== 2); // Output is true
console.log(2 === 2); // Output is true
