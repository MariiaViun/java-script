const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let price = 0;
  for (let product of products) {
    if (product.name === productName) {
      price = product.price;
       return price;
    };
   
  };
return null;

  // Change code above this line
}

console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Engine"));
