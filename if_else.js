let people = [
    {name: "John", age: 30},
    {name: "Jane", age: 20},
];

for (let person of people) {
    if (person.age > 21) {
        console.log(`Customer ${person.name} can buy a drink`);
    } else {
        console.log(`Customer ${person.name} can not buy a drink`);
    }
}
 let hour =15;
 if(hour<12){
    console.log("Good Morning");
} else if(hour<18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
} 

//Exercise

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}  
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}   
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}   