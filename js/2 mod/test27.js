function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
    for (const number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
       
        // for (let i = 0; i < numbers.length; i += 1) {
        //   const number = numbers[i];    

        //   if (number > value) {
        //     filteredNumbers.push(number);
        //   }
        // }


        // Change code above this line
    } return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3))
