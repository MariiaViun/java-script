function filterArray(numbers, value) {
   // Change code below this line
 const newArray = [];
    for (let i = 0; i < numbers.length; i+=1 ){
        // console.log(numbers[i]);
        if (numbers[i] > value) {
            newArray.push(numbers[i]);
        }
            
    }
    return newArray;

  // Change code above this line
}

console.log(filterArray([12, 24, 8, 41, 76], 38));

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5, 45, 13, 4, 106], 8));



// // Зроблено до мене
// function filterArray(numbers, value) {
// // Change code below this line
// let newArray = [];

//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] > value) {
//     newArray.push(numbers[i])
//     }

//     }

//     return newArray;

//     // Change code above this line
//     }
//     // const numbers = [];
// // for(let i = min; i <= max; i++) // numbers.push(i); // return numbers; // } 

// console.log(filterArray([1, 2, 3, 4,5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));




