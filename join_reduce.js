let shoppinglist=[
    {item:"Apple",quantity:6},
    {item:"Banana",quantity:5},
    {item:"Oatmeal",quantity:1},
    {item:"Avocado",quantity:4}
];
let grocerylist= shoppinglist.map(i=>i.item).join(" | ");
console.log(grocerylist);

let itemcount= shoppinglist.reduce((sum,i)=>sum+i.quantity,0);
console.log(itemcount);

//Exercise

let str=["Coding","is","fun","and","interesting"];
let str2=str.join(" ");
console.log(str2);

let num=[5,10,15,20];
let prd=num.reduce((p,i)=>p*i,1);
console.log(prd);