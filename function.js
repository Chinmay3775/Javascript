function greeting(name) {
    console.log(`Hello!, ${name} Welcome to our website`);
    
}
greeting("Chinmay");
 
let cart=[];
function getItemCount(){
    return cart.length;
}

let itemCount = getItemCount();
console.log(`You have ${itemCount} items in your cart.`);

//Exercise

function sum (a, b) {
    return a + b;
}

console.log(sum(5, 10));
