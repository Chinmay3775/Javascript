let num=[1,2,3,4,5,6,7,8,9,10];
num.splice(3,3);
console.log(num);
num.splice(3,0,10);

console.log("NUM: "+num);

let slicedlist=num.slice(4,7);

console.log("Sliced List: "+slicedlist);

let copylist=num.slice(0,8);
console.log("COPY LIST: "+copylist);