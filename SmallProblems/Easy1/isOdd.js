// To test whether a number is an odd or even

const isOdd = (num) => {
  return Boolean(Math.abs(num) % 2);
};

module.exports = { isOdd };
