let shoppinglist=[1,2,3,4];

let copylist=JSON.parse(JSON.stringify(shoppinglist));

copylist[0]=10;
console.log(("Original List: ",shoppinglist));
console.log(("Copy List: ",copylist));

let people = [
        { name: "Mark", age: 21 },
        { name: "Lucy", age: 16 }
    ];
    
let copypeople = [...people];
copypeople.push({ name: "Jane", age: 30 });

console.log("Original List:", people);
console.log("Copy List:", copypeople);

let peopledeepcopy=JSON.parse(JSON.stringify(people));
peopledeepcopy[0].name="Jason";
console.log("Original List:", people);
console.log("Deep Copy List:", peopledeepcopy);
