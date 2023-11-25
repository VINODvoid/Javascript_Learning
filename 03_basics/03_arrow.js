const user ={
    name : "bob",
    price : 120,

    welcomeMessage : function(){
        console.log(`${this.name} Welcome to my website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.name = "john";
// user.welcomeMessage();


// function chai()
// {
//     console.log(this);
// }
// chai();

const chai = () => {
    console.log(this);
}
// chai();

// ! Arrow  function does not have this keyword
const arrow = (num1 ,num2) => {
    console.log(num1+ num2);
}
arrow(2,3);

// ? Implicit return
// * can  use paranthesis for one line
// const arrow2 = (num1 ,num2) => (num1 + num2);
const arrow2 = (num1 ,num2) =>({"username": "john", "password": "1234"});
console.log(arrow2(2,3));

// ? Explicit return
const arrow3 = (num1 ,num2) => {
    return (num1 + num2);
}
console.log(arrow3(2,3));