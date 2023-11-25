const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.reduce(function(acc, cur) {
//     console.log(`acc :${acc} and ${cur} and Total :${acc + cur}`); 
//     return acc + cur
// },0)

const newNums = myNums.reduce((acc, cur) =>(acc+cur),0)
console.log(newNums);

const shoopingCart = [
    {
        item : "js Course",
        price :  9999
    },
    {
        item : "Web Development Course",
        price :  999
    },
    {
        item : "Android Course",
        price :  1009
    },
    {
        item : "React Course",
        price :  490
    }
]


const price = shoopingCart.reduce((acc ,item) => acc +item.price,0)
console.log(price);