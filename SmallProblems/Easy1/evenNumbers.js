// Log all even numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

const lib = require('./isOdd.js');
const even = [...Array(99).keys()].map(i => i + 1).filter(n => !lib.isOdd(n));

for (let n of even) {
  console.log(n);
}
