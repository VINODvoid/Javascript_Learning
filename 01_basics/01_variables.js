const accountId = 1267432
let accountEmail = "random!@gmail.com"
var accountPassword = "random"
let accountCity ="Bangalore"
let accountState;
// accountId = 12233445566778 //! Not allowed to change as it is already in use
// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
//? Prefer const over let and let over var
//* Prefer not to use var as it is not block scoped