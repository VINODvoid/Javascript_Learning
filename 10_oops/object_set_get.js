const User = {
    _email : '@company',
    _password : '1234abc',


    get email()
    {
        return this._email;
    },

    set email(value)
    {
        this._email = value;
    }

}


console.log(User.email);


const User1 = Object.create(User);
console.log(User1.email);

const User2  = Object.create(User);
User2.email = 'ites@.com';
console.log(User2.email);
