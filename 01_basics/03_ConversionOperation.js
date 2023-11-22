let score = 33
// console.log(typeof(score))

let score1 = true
// if score1 = 33abc then it will be string but typeof will return number because it will convert it into number 
let numberChange = Number(score1);
//console.log(numberChange); //? output is Nan means not a number
// console.log(typeof(numberChange));
// console.log(numberChange);

//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0
let isLogin = 1;
let booleanisLogged = Boolean(isLogin)
// console.log(booleanisLogged);
//"" => false
//1 => true
//0 => false
//"vind" => true
//undefined => false

let someNumber = 33
let strSomeNumber = String(someNumber);
// console.log(strSomeNumber); 
// console.log(typeof(strSomeNumber)); 

// **************** Operations ****************
let value = 3
let negVaue = -value
// console.log(negVaue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2); // Output is 4

let str1 = "Vinod "
let str2 = "Kalki"
let str3 = str1 + str2
// console.log(str3);
// 
// console.log("1" + 2); // Output is 12
// console.log(1 + "2"); // Output is 12
// console.log("1" + 2 +2); // Output is 122
// 
// console.log(1 + 1 + "2"); // Output is 22 //? because it will start from left to right
//* 1 + 1 = 2 => 2 + "2" = 22

console.log(+true); // Output is 1
console.log(+false); // Output is 0 
console.log(+""); // Output is 0
console.log(+"abc"); // Output is NaN

let counter = 200
counter ++ ;
console.log(counter); // Output is 201
