function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i=min; i<=max; i+=1){
    // console.log(i);
    numbers.push((i));
}
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(45, 50));
console.log(createArrayOfNumbers(5, 4));
