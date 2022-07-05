/**
 * The British Empire adopted the Gregorian Calendar in 1752,
 * which was a leap year. Prior to 1752, they used the Julian Calendar.
 * Under the Julian Calendar, leap years occur in any year that is evenly
 * divisible by 4. 
 * Using this information, update the function from the previous exercise
 * to determine leap years both before and after 1752.
 * 
 */

const breakYear = 1752;
const isLeapYear = (year) => {
  if (year <= 0) return `ERROR - year must be greater than zero!`;
  if (year % 4 === 0) {
    // NOTE: to identify leap years before 1752
    if (year < breakYear) return true;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
  }
  return false;
};