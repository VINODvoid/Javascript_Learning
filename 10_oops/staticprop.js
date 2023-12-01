class User {
    constructor(user)
    {
        this.user = user;
    }

    logMe()
    {
    console.log(`User ${this.user}`);
    }

   static  createId(){
        return '123';
    }
}

const newer = new User('newer');
newer.logMe();  
console.log(newer.createId());

class Teacher extends User{
    constructor(user, subject){
        super(user);
        this.subject = subject;
    }

    logMe(){
        console.log(`Teacher ${this.user} teaches ${this.subject}`);
    }
    createId(){
        super.logMe();
        return '456';
    }
}

const newerTeacher = new Teacher('newerTeacher', 'maths');
newerTeacher.logMe();