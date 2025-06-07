let shoppingCart=[];

// function addToCart(item1,item2) {
//     return shoppingCart.push(item1, item2);
// }

function addToCart(...items) {
    return shoppingCart.push(...items); // Using spread operator to unpack the items array
}

let itemsToAdd = ["Laptop", "Smartphone"];

// addToCart(itemsToAdd[0],itemsToAdd[1]);
addToCart(...itemsToAdd); // Using spread operator to unpack the array
console.log(`The shopping Cart State is: ${shoppingCart}`);


//Exercise
function addPrices(taxrate, ...prices){
    let totalPrice = 0;
    for (let p of prices) {
        totalPrice += p;
    }
    return totalPrice + (totalPrice * taxrate);
}

console.log(`Total Price with tax: $${addPrices(0.1, 10, 20, 30)}`); // Example usage with spread operator


let prices = [15, 25, 35];

console.log(`Total Price with tax: $${addPrices(0.2, ...prices)}`); // Using spread operator to unpack the prices array
