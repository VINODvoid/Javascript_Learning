class User {
    constructor(username, email,password )
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword()
    {
        return `${this.password}abc`;
    }
    changeUserName()
    {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'vinsdfsd','1247834734');
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

