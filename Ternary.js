let age =22;

console.log(age>=21? "Yes,You can drink " : "No,You can't drink");

let temp=30;
let advice=temp<0
        ?"Freezing"
        :temp<=20?"Cold":"Warm";

console.log(advice);

//Exercise
 let num=10;
 console.log(num%2==0?`${num} is Even`:`${num} is Odd`);
 
 let isLoggedIn=false;
console.log(isLoggedIn?"Welcome back!":"Please log in");

let num1=150;
console.log(num1<0?"Negative":num1===0?"Zero":
    num<100?"Positive and small":"Positive and large"
);

