// Objects
// Object.create();

const mySym = Symbol("key1");
// Objects literals
const usr = {
    name :"Vinod",
    "fullName" : "Vinod Kumar",
    [mySym] : "key1", //? Symbol as a key]
    age : 18,
    location : "Bangalore",
    email : "vinod7022234152@gmail.com",
    lastLogin : ["Monday", "Tuesday", "Wednesday"]
};
// console.log(usr.name); //*Normal way
// ! Note: If the key is a string, then we can't use dot notation

console.log(usr["name"]); //*Bracket notation
console.log(typeof(usr[mySym])); 

// ? Modify the object
usr.email = "iam@gmail.com";
console.log(usr); 

//Object.freeze(usr); //? Freezing the object
// ? by using freeze method we can't modify the object
usr.email = "XXXXXXXXXXXXXXX";
console.log(usr);

usr.greeting = function(){
    console.log("Hello User");
}
console.log(usr.greeting());

usr.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(usr.greeting2());