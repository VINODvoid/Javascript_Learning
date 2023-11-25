// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.


const myObj = {
    js: 'javascript',
    php: 'php',
    css: 'css'

}

for (const key in myObj) {
    // console.log(myObj[key]  + ': '+ key);
}

const map = new Map()
map.set('name','John')
map.set('age',20)
for (const key in map) {
   console.log(key);
}