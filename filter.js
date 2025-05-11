let people=[
    {name:"Mark",age:21},
    {name:"Lucy",age:16},
    {name:"Jack",age:19},
    {name:"Alice",age:25},
    {name:"Jane",age:30},
]

console.log("AGE EQUAL OR MORE THAN 21 ");
console.log(people.filter(item=>item.age>=21));


console.log("PEOPLE HAVING MORE THAN 4 LETTERS IN NAME ");
console.log(people.filter(item=>item.name.length>4));

