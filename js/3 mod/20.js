const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    for (const product of products) {
        let totalPrice = product.price * product.quantity;
        if (productName === product.name) {
            return totalPrice;
        }
    }
    return 0;
}


console.log(calculateTotalPrice('Radar'))