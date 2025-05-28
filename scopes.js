let shopName="Tech Store"; // GLOBAL SCOPE

function welcome() {
    console.log(`Welcome to ${shopName}!`);
    
}

function setShopName() {
    let shop="Tech Store1";
    console.log(`Shop name set to ${shop}`); // LOCAL SCOPE
}

if (true) {
  let shopName = "Chinu's Mobile Store";
  console.log("Inside if block:", shopName); //  BLOCK SCOPE
}

console.log("Outside if block:", shopName); 
