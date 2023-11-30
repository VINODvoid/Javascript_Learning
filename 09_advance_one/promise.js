const promiseOne  =  new Promise(function(resolve ,reject)
{
    // do an async task\
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is compelte');
        resolve()
    }
    ,1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})


new Promise (function(resolve,reject)
{
    setTimeout(function()
    {
        console.log('Async Task 2');
        resolve()
    },1000)

}).then(function()
{
    console.log('Async Task 2 resolved');  
})

const promiseThree = new  Promise(function(resolve,reject)
{
    setTimeout(function()
    {
    resolve({
        username : "Kalki",
        email:'kalki@gmail.com'
    })         
    },1000)
})

promiseThree.then(function(user){
    console.log(user.username);
    console.log(user.email );
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:'Vinod',pasword : "123"})
        }
        else{
            reject('Error : Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('The Promise is either resolved or reject ');
})


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = true;
        if(!error)
        {
            resolve({
                username:"John"
                ,
                passsword : "johnisscared"
            })
        }
        else
        {
            reject('ERROR :- Data Not Found')
        }
    }, 10000);

});

// async function consumePromiseFive()
// {
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getAllUsesrs(){
//     try {
//         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log('error',e);
//     }
    
// }
// getAllUsesrs()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
console.log(error);
})
