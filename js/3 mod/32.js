// Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg>firstNumber){
      total += arg;
    }
    
  }

  return total;
  // Change code above this line
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))