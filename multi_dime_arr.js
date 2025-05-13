let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let flat_matrix=matrix.flat();
console.log("Flattened Array: ",flat_matrix.join(" "));

let totalsum=flat_matrix.reduce((sum,i)=>sum+i,0);
console.log("Total Sum: ",totalsum);

let nestedArray=[
    [1,[2,3]],
    [4,[5,6]]
];
let flat_nested=nestedArray.flat(Infinity); 
console.log("Flattened Nested Array: ",flat_nested.join(" "));
