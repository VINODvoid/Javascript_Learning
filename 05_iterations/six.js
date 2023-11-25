const coding = ["js","php","css","js"]

// const values = coding.forEach((item) => {
//     console.log(item)

// })

// console.log(values)

const myNums = [6,8,9,10]
// const newNums = myNums.filter((num) => num>5)
// console.log(newNums)

const myNew = []
myNums.forEach((num) => {
    if(num>5)
    {
        myNew.push(num)
    }
})
console.log(myNew)


const books = [
    {
        title : 'book1',
        author : 'author1',
        genre : 'History'
    },
    {    
    title : 'book2',
        author : 'author2',
        genre : 'Political'
    },
    {
        title : 'book3',
        author : 'author3',
        genre : 'Science'
    },
    {
        title : 'book4',
        author : 'author4',
        genre : 'Political'
    },
    {
        title : 'book5',
        author : 'author5',
        genre : 'History'
    }
]


const myBooks = books.filter((book) => book.genre == "History");
console.log(myBooks);

const my2Books = books.filter((book) => book.genre == "Political");
console.log(my2Books);