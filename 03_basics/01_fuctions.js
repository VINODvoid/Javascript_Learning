// Functions

// * Functions are a way to group code together and give it a name. This allows us to reuse code and make our code more readable.
// * Functions are declared with the `function` keyword.

// console.log("V");
// console.log("I");
// console.log("N");
// console.log("O");
// console.log("D");

function saymyName()
{
    // console.log("V");
    // console.log("I");
    // console.log("N");
    // console.log("O");
    // console.log("D");
}
// saymyName();

// function add(a,b)
// {
//     console.log( a+b);
// }
// add(2,2);
// const result = add(2,2);

function addTwoNumbers(num1,num2)
{
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbers(2,2);
// console.log("Result",result);

function loginUserMessage(userName ="User") // Default Parameter
{
    if(userName === "" || userName === undefined)
    {
        console.log("Please enter the username");
        return
    }
    return `${userName} just logged in`;
}
// console.log(loginUserMessage("Vinod"));
console.log(loginUserMessage("Kamal")); // output the login message


// * Function Expression
// * Function Expression is a function that is assigned to a variable.
function cAlcualteCartPrice(...num1)
{
    return num1;
}
console.log(cAlcualteCartPrice(100,232,123,45,7,45,1234,57,32,12,456));

const user = {
    username : "user",
    password : "XXXXXXXX",
}
function login(anyObject)
{
    console.log(`UserName = ${anyObject.username} and Password = ${anyObject.password}`);
}
login(user);

login({
    username:"sam",
    password:123
});