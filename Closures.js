 function createCounter() {
    let count =0;

    return function(){
        count++;
        console.log(`Current Count: ${count}`);
        
    }

 }

 const counter = createCounter();
counter(); // Output: Current Count: 1
counter(); // Output: Current Count: 2 
counter(); // Output: Current Count: 3


function createStore(){
    let cart =[];

    return {
        greeting: function(){
            console.log("Welcome to the Store!");
        },
        addItem:function(item){
            cart.push(item);
            console.log(`Item ${item} has been added to cart`);   
        },
        printState: function(){
            console.log(cart);
            
        }
    }
}
const store = createStore("Zoolandia")
store.greeting(); // Output: Welcome to the Store!
store.addItem("Catnip");
store.printState();
store.addItem("Fish");
store.printState();

console.log(store.cart);
console.log(store.storename);

//Exercise
function multipler(num){
    return function(number){
        return num*number;    }

}

const double = multipler(2);
console.log(double(5));
console.log(double(10));

const five = multipler(5);
console.log(five(12));



function createValidator(min,max){
    return function(number){
        return number >=min && number <=max;
    }
}
const isAdult = createValidator(18,65);
console.log(isAdult(20)); // Output: true
console.log(isAdult(17)); // Output: false
