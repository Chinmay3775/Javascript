let fruits = ["apple", "banana", "cherry"];
for (let i of fruits){
    console.log(i.toUpperCase());
    
}
let msg = "Hello World";
for (let char of msg) {
    console.log(char);
}   

let users=[
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
]

for (let user of users) {
    console.log(`Name: ${user.name} is ${user.age} years old`);
    
}

// Exercise
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numbers) {
    if (num%2===0) {
        console.log(`${num} is even`);
        
    }
}

let arr=[
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
];
for(let row of arr){
    let sum=0;
    {
        for(let i of row ){
            sum+=i;
        }
        console.log(`Sum of row: ${sum}`);
        
    }
}