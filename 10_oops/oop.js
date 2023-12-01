// OOP's 
const user ={
    username :'admin',
    loginCount : 10,
    signedIn : true,
    getUserDetails : function(){
        console.log(this);
        console.log(`User ${user.username}`);

    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username,password,email,age){
    this.username = username;
    this.password = password;
    this.email = email;
    this.age = age;
    // return this;
}
const userOne = new User('vinod','123','XXXXXXXXXXXXXXX',23);
const userTwo =  new User('Kalki','123','XXXXXXXXXXXXXXX',23);
console.log(userOne.constructor);
console.log(userTwo);
