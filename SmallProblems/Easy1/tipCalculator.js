// Create a simple tip calculator.
// The program should prompt for a bill amount and a tip rate.
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
// You can ignore input validation and assume that the user will enter numbers.

const readlineSync = require('readline-sync');

const calcTip = (total, percentage) => {
  let tip = total * (percentage / 100.00);
  return {
    tip: tip.toFixed(2),
    total: (total + tip).toFixed(2)
  };
};

const total = readlineSync.questionFloat("What is the bill? ");
const percentage = readlineSync.questionFloat("What is the tip percentage? ");

const result = calcTip(total, percentage);
console.log(`\nThe tip is $${result.tip}\nThe total is $${result.total}`);