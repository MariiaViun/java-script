// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const ind = this.books.indexOf(oldName);
    
//     // console.log(ind);
//  this.books.splise(ind, 1, newName);

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))

// // const message = "Welcome to Bahamas!";
// // console.log(message.indexOf("to")); // 8

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  
  updateBook(oldName, newName) {
    // Change code below this line
    const ind = this.books.indexOf(oldName);
this.books.splice(ind, 1, newName);
return this.books;
    // Change code above this line
  },
  
};
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))