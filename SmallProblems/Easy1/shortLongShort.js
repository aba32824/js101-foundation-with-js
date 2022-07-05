// Write a function that takes two strings as arguments,
// determines the length of the two strings, and then returns
// the result of concatenating the shorter string, the longer string,
// and the shorter string once again.
// You may assume that the strings are of different lengths.
// NOTE: what shall we do if both string have the same length?

const shortLongShort = (a, b) => {
  if (a.length < b.length) {
    return `${a}${b}${a}`;
  } else if (a.length > b.length) {
    return `${b}${a}${b}`;
  } else {
    return "The length of strings is the same!";
  }
};