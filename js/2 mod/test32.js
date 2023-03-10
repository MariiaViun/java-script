function includes(array, value) {
  // Change code below this line
    for (let i = 0; i < array.length; i += 1) {
        // console.log(array[i]);
        if (array[i] === value) {
            return true;
            break;
    }
    }
      return false;
  // Change code above this line
}

console.log(includes(["apple", "plum", "pear", "orange"], "juj"));