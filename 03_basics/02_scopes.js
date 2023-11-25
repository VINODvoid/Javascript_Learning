//  Scopes 

var c =100
let a = 300
if(true)
{
    let  a = 10
    const b = 20
    var c  =30
}

//console.log(a); // ? Error because of scoping here
//console.log(b); // ? Error because of scoping here
console.log(c); // ? c = 30 because of var keyword

console.log(a);


function one()
{
    const userName = "vinod"

    function two()
    {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();

if(true)
{
    const website = "youtube"
    if(true)
    {
        const nme = "kalki"
       console.log(website + " " + nme);

    } console.log(website);
}
// console.log(website);



// +++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++
addOne(5);
function addOne(num1)
{
    return num1 + 1
}

addOnne(5)//? Error becaise of hoisting Let see in next section

const addOnne = function(num1){
    return num1 + 1
}
