const name = "Jo h n";
const rep = 50
// console.log(name + rep);  //// USed in older version of JS
console.log(`${name} ${rep}`); //? Output is John 50
const name1 = new String("John");

//* String Methods

console.log(name1[0]); //? Output is J
console.log(name1.__proto__); 

// ? 1 : length
console.log(name1.length); //? Output is 4

// ? 2 : toUpperCase
console.log(name1.toUpperCase()); //? Output is JOHN

// ? 3 : toLowerCase
console.log(name1.toLowerCase()); //? Output is john

// ? 4 : charAt
console.log(name1.charAt(2)); //? Output is J

//? 5 : indexOf
console.log(name1.indexOf("o")); //? Output is 

// ? 6 : Substring
console.log(name1.substring(0, 2)); //? Output is Jo

// ? 7 : slice
console.log(name1.slice(0, 2)); //? Output is Jo
console.log(name1.slice(-3)); //? Output is ohn

// ? 8 : trim
console.log(name1.trim()); //? Output is John

// ? 9 : replace 
const url = "https://api.twitter.com/hitesh%20choundary"
console.log(url.replace("%20", " ")); //? Output is 

// ? 10 : includes
console.log(name1.includes("o")); //? Output is true
console.log(name1.includes("O")); //? Output is false

// ? 11 ; split
const name2 = "John-Doe";
console.log(name2.split("-")); //? Output is ["John", "Doe"]