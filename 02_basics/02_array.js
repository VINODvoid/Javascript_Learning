// Arrays
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
// arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[5][1]);

//? concat function
// let arr3 =arr1.concat(arr2)
// console.log(arr3);

// ? spread function
let arr3 = [...arr1, ...arr2]
// console.log(arr3);

//? flat function
const arr4 = [1,2,3,[4,5,6],7,8,9,[10,11,12]]
// console.log(arr4.flat(Infinity));

// console.log(Array.isArray("Vinod")) // false
// console.log(Array.from("Vinod")) // [ 'V', 'i', 'n', 'o', 'd' ]
// console.log(Array.from({name:"Vinod"})) // []; Interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]




