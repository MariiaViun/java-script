// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// for (const key of keys){
// //   console.log(key);
//     values.push(apartment[key]);
// }
// console.log(values);

function countProps(object) {
  // Change code below this line
    let propCount = 0;

    const keys = Object.keys(object);
    // console.log(Object.keys(object));

for (const key of keys){
//   console.log(object[key]);
    propCount += 1;
}
  return propCount;
  // Change code above this line
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({}))