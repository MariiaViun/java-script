const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const arrayName = [];
  
  for (const product of products) {
    if (product[propName]) {
      arrayName.push(product[propName])
    };
        
   // return
  
   
};
return arrayName;
  // Change code above this line
}
getAllPropValues("category")
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("name"))