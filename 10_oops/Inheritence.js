class User {
    constructor(username) {
        this.username = username;
    }
    logMe()
    {
        console.log(`USERNAME ${this.username}`);
    }
}

class Teacher extends User{
 constructor(username, subject)
 {
        super(username);
        this.subject = subject;
 }   
 TeacherMe()
 {
     super.logMe();
     console.log(`SUBJECT ${this.subject}`);
 }
}

const chai = new Teacher('chai', 'maths');
chai.TeacherMe();

const test = new User('test');
test.logMe();
 