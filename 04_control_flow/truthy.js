const a = ""
if(a)
{
    console.log("a is true")
};
console.log("a is false");

// falsy values are false, 0, "", null, undefined, NaN
// truthy values are everything else examples are true, 1, "hello", [1,2,3], {name: "bob"}

//  Nullish Coalescing Operator is used for testing purposes only and should not be used in production code.
let val1 ;
// val1 =5 ?? 10
// val1 = null ?? 10;
// val1 = 0 ?? 10;
 val1 = "" ?? 10;

console.log(val1);

const price = 100
price >=100 ? console.log("You get a discount") : console.log("You get no discount");