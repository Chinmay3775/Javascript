let shopping_list=[];

shopping_list.push("eggs");

shopping_list.push("sausage","ketchup");

console.log(shopping_list);

let unshiftResult=shopping_list.unshift("Coffee"); 

console.log(shopping_list);

let ketchup=shopping_list.pop();

console.log(shopping_list);

let coffee=shopping_list.shift();

console.log(shopping_list);

let splice=shopping_list.splice(0,2);

console.log(splice);

// Exercies
let shopping_list2=[];

shopping_list2.push("bread","butter");

console.log(shopping_list2);

shopping_list2.unshift("Hand Soap","Toothpaste");

console.log(shopping_list2);

shopping_list2.splice(0,2);

console.log(shopping_list2);

shopping_list2.pop("Butter");

console.log(shopping_list2);