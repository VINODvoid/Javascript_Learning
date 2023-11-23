// Array

const arr = [1,"2",23,45,6]
const myHeros = ["Ironman","Captain America","Spiderman","Thor"]
console.log(myHeros);
const arr1 = new Array(1,2,3,4,5)
console.log(arr1);
console.log(arr[0])

// Array Methods

// ? push function
myHeros.push("Hulk")
console.log(myHeros);

// ? pop function
myHeros.pop()
myHeros.pop()
console.log(myHeros);

//? unshift function
myHeros.unshift("Ironman")
console.log(myHeros);

//? shift function
myHeros.shift()
console.log(myHeros);

//? includes function
console.log(typeof(myHeros.includes("Ironman")));
console.log(myHeros);

//? indexof function
console.log(myHeros.indexOf("Joker"));

//? Join function
const myHeros1 = arr.join()
console.log(myHeros1); 
console.log(typeof(myHeros1));

//? slice , splice
const myHeros2 = myHeros.slice(1,3) // slice will not change the original array and return the sliced elements
console.log(myHeros2);

const myHeros3 = myHeros.splice(1,3)  //splice will remove the elements from the original array and return the removed elements
console.log(myHeros3);