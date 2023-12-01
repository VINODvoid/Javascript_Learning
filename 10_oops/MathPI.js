// const myObj = {
//     userName : userName
// }

const Desscriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(Desscriptor);


// console.log(Math.PI);


const chhai = {
    name : 'chhai',
    price: 10,
    isAvailable : true,
}
console.log(Object.getOwnPropertyDescriptor(chhai, 'name'));

Object.defineProperty(chhai, 'name', {
    writable : false,
    enumerable : false,
    configurable : false,
}); 