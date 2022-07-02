// To test whether a number is an odd or even

const isOdd = (num) => {
  return Boolean(Math.abs(num) % 2);
};

// to run a basic test
let numbers = [2, 5, -17, -8, 0, 7];
for (let n of numbers) {
  console.log(`Number ${n} is odd? ${isOdd(n)}`);
}
