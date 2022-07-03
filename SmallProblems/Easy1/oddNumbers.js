// Log all odd numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

const lib = require('./isOdd.js');
const numbers = Array.from(Array(99).keys()).map(i => i + 1);

for (let n of numbers) {
  if (lib.isOdd(n)) {
    console.log(n);
  }
}
