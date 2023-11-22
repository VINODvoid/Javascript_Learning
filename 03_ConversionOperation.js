let score = 33
console.log(typeof(score))

let score1 = true
// if score1 = 33abc then it will be string but typeof will return number because it will convert it into number 
let numberChange = Number(score1);
//console.log(numberChange); //? output is Nan means not a number
console.log(typeof(numberChange));
console.log(numberChange);

//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0
let isLogin = 1;
let booleanisLogged = Boolean(isLogin)
console.log(booleanisLogged);
//"" => false
//1 => true
//0 => false
//"vind" => true
//undefined => false

let someNumber = 33
let strSomeNumber = String(someNumber);
console.log(strSomeNumber); 
console.log(typeof(strSomeNumber)); 

