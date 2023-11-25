// if 
// ? Syntax
// if(condition)
// {
//  code
// }

// ? Example
// * 1 
const isUserLoggedIn = true
if(isUserLoggedIn)
{
    console.log("Welcome User")
}

// * 2 
if(2 ==="2")
{
    console.log("2 == '2' is true");
}
console.log("2 == '2' is false");

// Short Hand for if
const bal = 10000
// if(bal > 0) console.log("You have money"); 
if(bal < 500)
{
    console.log("less");
}
else if(bal < 1100)
{
    console.log("less");
}
else if (bal < 1000)
{
    console.log("less");

}
else{
    console.log("more");
}


const userLogeedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromemail = true
if (userLogeedIn && debitCard) {
    console.log("You can buy");
}
if(loggedInFromGoogle || loggedInFromemail)
{
    console.log("You can login");
}