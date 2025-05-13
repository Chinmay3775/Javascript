let shoppinglist=[
    {item:"Apple",quantity:6},
    {item:"Banana",quantity:5},
    {item:"Oatmeal",quantity:1},
    {item:"Avacado",quantity:4},
];

let grocerylist=shoppinglist.map(i=>i.item.toUpperCase());
console.log(grocerylist);

shoppinglist.forEach(i=>console.log(`${i.item.toUpperCase()}-${i.quantity}`));

shoppinglist.forEach(i=>i.quantity+=2);
console.log(shoppinglist);


//EXERCISE
let numbers=[3,2,5,6,8];
let num2=numbers.map(i=>i*10);
num2.forEach(i=>console.log(i)); 

let students=num2.map((n,index)=>({
    name:`Student ${index+1}`,
    grade:n
}));

students.forEach(i=>console.log(`${i.name} - ${i.grade}`));