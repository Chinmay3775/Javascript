function greet(name="Customer"){
    console.log(`Hello, ${name}!`);
}

greet();
greet("Alice");

function order(item="generic item", quantity=1) {
    console.log(`Order placed for ${quantity} ${item}(s).`);
}   
order();
order("Laptop", 2);

// Exercise
console.log();

console.log("Exercise: Default and Optional Arguments in Functions");

function greetCustomer(name="Customer", loyaltyLevel="Regular") {
    console.log(`Hello, ${name}! Your loyalty level is: ${loyaltyLevel}.`);
}

greetCustomer();
greetCustomer("Bob", "Gold");
greetCustomer("Alice"); // Using default loyalty level

function applyDiscount(price,discountrate=0.1,couponValue=0) {
    let discount = price * discountrate;
    let finalPrice = price - discount - couponValue;
    return finalPrice;
}

console.log(`Final price with discount: Rs ${applyDiscount(100, 0.2, 5)}`); // Using custom discount rate and coupon value
console.log(`Final price with default discount: Rs ${applyDiscount(100)}`); // Using default discount rate and coupon value