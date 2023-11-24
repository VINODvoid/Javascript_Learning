//  Objects Methods
const tinderUser = new Object();
tinderUser.name = "John";
tinderUser.age = 30;
tinderUser.isMarried = false;
// console.log(tinderUser );

const regularUser = {
    email: "some@example.com",
    fullname :{
        usrFullName :{
            firstName :"kom",
            lastName : "kumar"
        }
    }
}
// console.log(regularUser.fullname?.usrFullName.firstName);

// ? Combine two objects
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {...obj1, ...obj2}
//  const obj3 = {obj1, obj2} //! This is not the right way
//  console.log(obj3);
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "some@gmail.com"
    }
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));



// * Object  Destructuring
const course = {
    courseName : "React",
    price :"999",
    courseIntrusctor : "Vinod"
}
const {courseIntrusctor : instructor} = course;
// console.log(instructor);

// * Array Destructuring
const arr = ["Vinod", "Kumar", "Bangalore"];
const [firstName, lastName, location] = arr;
// console.log(firstName);
// console.log(lastName);
// console.log(location);



//! JSON (JavaScript Object Notation)
//? JSON is a syntax for storing and exchanging data.

