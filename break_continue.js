for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // break; 
        continue;
    }
    console.log(i);
}
console.log("Break and Continue Example");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; 
    }
    if (i % 2 === 0) {
        continue; 
    }
    console.log(i);
}

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let searchFruit = "cherry";
let i =0;
while(i<fruits.length) {
    if (fruits[i] === searchFruit) {
        console.log(`Found ${searchFruit} at index ${i}`);
        break; 
    }
    i++;
}


//Exercise
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
    if (num % 3 === 0) {
        continue; 
    }
    if (num>7){
        break;
    }
    console.log(`${num} is odd and less than or equal to 7`);
}