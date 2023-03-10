function getCommonElements(array1, array2) {
  // Change code below this line
    const newArray = [];
    for (let i = 0; i < array1.length; i += 1){
        console.log(array1[i]);
        //  console.log(array2[i]);
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }

    return newArray;
 // Change code above this line
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

