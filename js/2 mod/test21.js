function findLongestWord(string) {
  // Change code below this line
  string.split(' ');
//  console.log(string.split(' '));
    let LongestWord = 0;
    for (let i = 0; i < string.length; i += 1) {
        // console.log(string[i]);
        if ((string[i].length) > 2) {
            LongestWord = string[i];
        }
        
    }
 return LongestWord;

  // Change code above this line
}


console.log(findLongestWord('may the force be with you'));
console.log(findLongestWord('google do a roll'));
console.log(findLongestWord('he quickuuu brown fox jumped over the lazy dog'));

// function findLongestWord(string) {

// let wordString = string.split(' ');
// let word = ' ';
// let wordLast = 0;
  
//   for (let i =0; i < wordString.length; i +=1) {
//    wordLast = word.length;;
    
//     if (wordString[i].length > wordLast) {
//       word = wordString[i];
//     }
//   }
//    return word;
// }

// console.log(findLongestWord('may the force be with you'));
// console.log(findLongestWord('google do a roll'));
// console.log(findLongestWord('he quickuuu brown fox jumped over the lazy dog'));