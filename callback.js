// function greeting(name){
//     alert(`Hello ${name},Welcome to our Website!`);
// }
// function processUserInput(callback){
//     const name = prompt(`Please Enter your name:`);
//     callback(name);
// }
 
// processUserInput(greeting)

//Exercise
function processString(callback){
    const str =prompt("Please Enter a String:");
    const result = callback(str);
    alert(`Processed String: ${result}`);  
    }

function toUpperCase(str){
    return str.toUpperCase();
}
function reverse(str){
    return str.split('').reverse().join('');
}

processString(toUpperCase);
processString(reverse);