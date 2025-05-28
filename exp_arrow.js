let shoppingcart=[];

// let additem=function(item){
//     shoppingcart.push(item);
// }
let additem=(item)=>{
    shoppingcart.push(item);
}

additem("Apple");
additem("Banana");
console.log(shoppingcart);


// let itemCount =function(){
//     return shoppingcart.length;
// }
let itemCount =()=>{
    return shoppingcart.length;
}

// let  itemList =function(){
//     return shoppingcart.join(", ");
// }
let  itemList =()=>{
    return shoppingcart.join(", ");
}

console.log(`There are ${itemCount()} items in the cart: ${itemList()}`);


//Exercise:
function calculateArea(length, width){
    return length * width;
}

console.log(calculateArea(5, 10)); // Output: 50


let isEven = function(num) {
    return num%2===0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false


let max =(a,b)=>{
    return a>b?a:b;
}

console.log(`MAX: ${max(10, 20)}`);
