let a= 10;
let b=20;
let operation= "+";
let result=0;

switch (operation) {
    case "+":
        result= a+b;
        console.log("Addition is: " + result);
        break;
    case "-":
        result= a-b;
        console.log("Subtraction is: " + result);
        break;
    case "*":
        result= a*b;
        console.log("Multiplication is: " + result);
        break;
    case "/":
        result= a/b;
        console.log("Division is: " + result);
        break;
    default:
        console.log("Invalid operation");
}


//exercise

let month=2;
let season= "";

switch (month) {
    case 12:
    case 1:
    case 2:
        season= "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season= "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season= "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season= "Fall";
        break; 
    default:
        season= "Invalid month";
        break;       
}

console.log("The season is: " + season);
