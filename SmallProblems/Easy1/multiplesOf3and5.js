/**
 * Write a function that computes the sum of all numbers between 1
 * and some other number, inclusive, that are multiples of 3 or 5.
 * For instance, if the supplied number is 20, the result should be 98 
 *  (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 * 
 * You may assume that the number passed in is an integer greater than 1.
 */

const multisum = (num) => {
  return [...Array(num).keys()]
    .map(i => i + 1)
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, j) => acc + j);
};