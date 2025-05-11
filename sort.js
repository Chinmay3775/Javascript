let arr=[23,1,45,12,78,3];
let ascending=arr.slice().sort((a,b)=>a-b);
console.log(ascending);

let descending=arr.slice().sort((a,b)=>b-a);
console.log(descending);

let animals=["cat","dog","elephant","ant","hippopotamus"];
let desanimal=animals.slice().sort().reverse();
console.log(desanimal);

let word_des=[...animals].sort((a,b)=>a.length-b.length);
console.log(word_des);