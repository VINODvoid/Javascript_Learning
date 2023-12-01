function multipleBy5(num) {
    return num * 5;
}

multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score)
{
    this.username = username;
    this.score = score;
 
}
createUser.prototype.count = function()
{
    this.score++;
}
createUser.prototype.print = function()
{
    console.log(`score is ${this.score}`);
    console.log(`username is ${this.username}`);
}
const tea = new createUser('tea',10);
const coffee = new createUser('coffee',100);

tea.print();
tea.count();
tea.print();