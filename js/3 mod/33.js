// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
  for (const num of args){
    if (array.includes(num)) {
      matches.push(num);
    }
  }
// if (array.includes(...args)){
//   matches.push
// }
  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))