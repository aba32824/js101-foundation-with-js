/**
 * Write a function that determines and returns 
 * the UTF-16 string value of a string passed in 
 * as an argument. The UTF-16 string value is the 
 * sum of the UTF-16 values of every character in 
 * the string. 
 * 
 * NOTE: You may use String.prototype.charCodeAt() 
 * to determine the UTF-16 value of a character.
 */

const uft16Value = (text) => {
  return [...text]
    .map(j => j.charCodeAt())
    .reduce((acc, c) => acc + c, 0);
}; 