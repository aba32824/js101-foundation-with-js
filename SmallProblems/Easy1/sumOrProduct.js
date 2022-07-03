// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of 
// all numbers between 1 and the entered integer, inclusive.

const readlineSync = require('readline-sync');

const getArrayOfNumbers = (n) => {
  return [...Array(n).keys()].map(i => i + 1);
};
const getSum = (n) => {
  const numbers = getArrayOfNumbers(n);
  const sum = numbers.reduce((sum, i) => sum + i, 0);
  console.log(`The sum of the integers between ${numbers[0]} and ${numbers[numbers.length-1]} is ${sum}`);
};
const getProduct = (n) => {
  const numbers = getArrayOfNumbers(n);
  const product = numbers.reduce((p, i) => p * i, 1);
  console.log(`The product of the integers between ${numbers[0]} and ${numbers[numbers.length-1]} is ${product}`);
};


const num = readlineSync.questionInt("Please enter an integer greater than 0: ");
const key = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

switch (key) {
  case "s":
    getSum(num);
    break;
  case "p":
    getProduct(num);
    break;
  default:
    console.log(`Key ${key} is not supported!`);
    break;
}
