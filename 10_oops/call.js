function userName(name) {
    this.name = name;

}
function createUser(username, email, password) {
 userName.call(this,username);

 this.email = email;
 this.password = password;
}

const chai = new createUser("chai", "XXXXXXXXXXXXXX", "1234");
console.log(chai);