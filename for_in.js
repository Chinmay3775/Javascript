let person={
    name: "John",
    age: 30,
    city: "New York"
};

for(let i in person){
    if(typeof person[i] === 'string') {
        console.log(`${i}: ${person[i]}`);
    }
}

let fruits = ["apple", "banana", "cherry"];
for(let i in fruits) {
    console.log(`${i}: ${fruits[i]}`);
}

//Exercise
let books = [{
    title:  "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}, {
    title:  "1984",
    author: "George Orwell",
    year: 1949
},
{
    title:  "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}];
for(let i=0;i< books.length;i++) 
    {
        let book = books[i];
        for(let key in book) {
            console.log(`${key}: ${book[key]}`);
        }
}