const changeEven = (numbers, value) => {
  // Change code below this line
  const newArray = [];
  numbers.forEach(element => {
    if (element % 2 === 0) {
      newArray.push(element+value);
    }  else newArray.push(element)
  })
  return newArray;
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
