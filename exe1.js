let student1 ={
    name: "John Doe",
    age: 20,
    Grade: 85,
    lessonprice: 20,
};

// let student2 ={...student1};
// let student2= Object.assign({},student1);
let student2 = JSON.parse(JSON.stringify(student1));
student2.name='BOB';

student1.subject='Maths';
student2.subject='Maths';

let student3JSON='{"name": "Charlie","age":17,"Grade": 90,"lessonprice": 35}';
student3=JSON.parse(student3JSON);

student1.nextLessonDate= new Date(2025, 6, 5);
student2.nextLessonDate= new Date(2025, 6, 6);
student3.nextLessonDate= new Date(2025, 6, 7);

let highestGrade= Math.max(student1.Grade,student2.Grade,student3.Grade);
let lowestGrade= Math.min(student1.Grade,student2.Grade,student3.Grade);
Object.freeze(student3);