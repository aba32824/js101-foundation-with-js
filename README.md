# JS 101 - Foundation with JS

## Exercises: Small Problems

It's a list of small exercises to memorise/recall JS syntax. The list consists of the following tiny problems:

### Isn't it Odd?

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.


### Odd Numbers
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

### Even Numbers
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

### How big is the room?
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

**Note: 1 square meter == 10.7639 square feet**

### Sum or Product of Consecutive Integers
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

### Short Long Short
Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

**Note: what to do if both strings have the same length?**

### Leap Years (Part 1)

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

### Leap Years (Part 2)
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

### Multiples of 3 and 5
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

### UTF-16 String Value
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 

Note: You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.
