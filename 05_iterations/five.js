const coding = ["js","php","css"]


coding.forEach(function (val){
    // console.log(val);
})

// coding.forEach((item) => console.log(item))
function printme(item){
    console.log(item)
}
// coding.forEach( printme)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        lang : 'js',
        langFile : 'js.js'
    },
    {
        lang : 'java',
        langFile : 'java.java'
    },
    {
        lang : 'c++',
        langFile : 'c.cpp'
    }
]
myCoding.forEach(function (item){
    console.log(item.lang);
    console.log(item.langFile);
}
)