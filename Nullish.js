let userItemPerPage = 0;
let ItemPerPage = userItemPerPage || 10;

console.log(`Items per page: ${ItemPerPage}`); // Using nullish coalescing operator to set default value

function greet(name){
    const userName = name ?? "Guest";
    console.log(`Hello, ${userName}!`); // Using nullish coalescing operator to provide a default value
}

greet(" "); // No name provided, should use default "Guest"
greet("Alice"); // Name provided, should use "Alice"
greet(null); // Null provided, should use default "Guest"
greet(undefined); // Undefined provided, should use default "Guest"


// Exercise

function createPetProfile(pet){
    const nickname = pet.nickname ?? "No Nickname Provided";
    const favoriteToy = pet.favoriteToy ?? "No Favorite Toy Provided";

    return `Pet Profile: Nickname: ${nickname}, Favorite Toy: ${favoriteToy}`;
}

console.log(createPetProfile({ nickname: "Buddy", favoriteToy: "Ball" })); // Both properties provided
console.log(createPetProfile({ nickname: "Mittens" })); // Only nickname provided
console.log(createPetProfile({ favoriteToy: "Mouse" })); // Only favoriteToy provided
