// Build a program that asks the user to enter
// the length and width of a room in meters,
// and then logs the area of the room to the console
// in both square meters and square feet.
// Note: 1 square meter == 10.7639 square feet

const readlineSync = require('readline-sync');

const calcArea = (l, w) => {
  return (l * w).toFixed(2);
};
const toSquareFeet = (m) => (m * 10.7639).toFixed(2);

console.log("Enter the length of the room in meters:");
let lengthInMeters = readlineSync.prompt();
console.log("Enter the width of the room in meters:");
let widthInMeters = readlineSync.prompt();

let area = calcArea(lengthInMeters, widthInMeters);
console.log(`The area of the room is ${area} square meters (${toSquareFeet(area)} square feet).`);
