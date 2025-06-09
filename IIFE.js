(function(){
    console.log("Welcome to the IIFE Example!");
    
})();

(function(name){
    console.log(`Hello, ${name}! This is an IIFE with a parameter.`);
    
})("Chinmay");

const result = (function(){
    const privateVariable ="This is a private variable";
    return privateVariable;
})();
console.log(result); // Output: This is a private variable

// Example of an IIFE that returns a function

 (function(a,b){
    console.log(a+b);   
    
 })(5,10);

 const sum = (function(a,b){
    return a+b;
    
 })(50,10);
console.log(sum); 