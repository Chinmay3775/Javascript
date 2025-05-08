let list1=["milk","cheese"];
let list2=["bread","butter"];
let list3=["banana","apple"];

let mergelist=list1.concat(list2,list3);
console.log(mergelist);

let mergelist2=[...list1,...list2,...list3];
console.log(mergelist2);