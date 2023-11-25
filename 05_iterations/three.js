// Array Specifc loops
// =============================================
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
const greeting = "Hello World"
for(const greet of greeting)
{
    console.log(greet);
}

// Map 
const map = new Map()
map.set('name','John')
map.set('age',20)
for(const [key,value] of map)
{
    console.log(key,value);
}

const myObj = {
    'game1' : 'nfs',
    'game2':'fifa'
}

