let array=[1,2,3,4,5];

console.log(array.some(item=>item>3));

console.log(array.every(item=>item<6));

let people=[
    {name:"John",age:25},
    {name:"Jane",age:30},
    {name:"Jim",age:17}
];
console.log("Person over 18:",people.some(person=>person.age<18));
console.log("All persons over 15:",people.every(person=>person.age>15));
