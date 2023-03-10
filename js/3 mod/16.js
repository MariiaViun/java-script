function countTotalSalary(salaries) {
    let totalSalary = 0;
    let values = 0;
  // Change code below this line
    values = Object.values(salaries);
    
    for (const value of values) {
        totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
console.log(countTotalSalary({})) 