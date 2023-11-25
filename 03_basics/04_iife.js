// Immediately Invoked Function Expression (IIFE)

// ? Why use of iife function expression instead of normal function expression  because it is not possible to invoke a function expression immediately. It can only be invoked by its name.
// * Due to globl scope pollution issues so we need to use IIFE function expression.
(function chai() // named IIFE
{
    console.log("DBb CONNECTED")

})();

// ? IIFE function expression with parameters
// ()();

((name) => {   //unnamed IIFE
    console.log("Hacked", name);
})('hitesh');



