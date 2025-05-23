// let i =1;
// do {
//     console.log(i);
//     i++;
// }while (i <= 5);

// let number
// do{
//     number=prompt("Enter a number between 1 and 10");
// }while  (number < 1 || number > 10);

// console.log(`You entered ${number}`);

//Exercise

// let number;
// let cn =7;
// do{
//     number=prompt("Guess the number between 1 and 10");
// }while  (parseInt(number) !== cn);
// console.log(`You guessed the number ${cn}`);

let email;
do {
    email = prompt("Enter your email address");
} while (!email.includes("@gmail.com") || email.length < 5);
