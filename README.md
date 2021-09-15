# Basic Unit Test with Jest

Practice writing basic unit tests with Jest

Using TDD (Test Driven Development) test and write the following functions. Write each function in it's own `.js` file with a separate, matching `.test.js` file.

## Submitting instructions

1. Fork the repository `github.com/curso-backend-web/node-testing.git`
2. Clon the repository to your computer from **YOUR GITHUB USER**
3. Work through exercises, practicing with classes and objects.

4. To submit execute the following commands:

```
git add .
git commit -m "done"
git push

```

5. From repository [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/) with your names a 'EXERCISE COMPLETED' subject.


# Developing Instructions

We will work on ES6 Module Version. You should configure your `package.json` to work with [ECMAScript Modules](https://jestjs.io/docs/ecmascript-modules)

-

# Test Cases

1. Write a function that takes in a number and returns one of the following:

    - If the number is divisible by 3, return "Fizz".
    - If the number is divisible by 5, return "Buzz".
    - If the number is divisible by both 3 and 5, return "FizzBuzz".
    - Otherwise, just return the number that was passed into the function.

2. Write a function that takes in a year and returns a boolean indicating if the year is a leap year. Years that are divisible by 4 are leap years, but years that are divisible by 100 are not leap years, but years that are divisible by 400 are leap years.

3. Write a function that takes in a DNA string  (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string.

4. Write a function that takes an array and returns the sum of all the positive numbers in the array. Values that can be converted to numbers should be converted and included in the sum if positive. If the array is empty, return zero.

5. Given a string, find the first consecutively repeating character in it and return it's index. If there are no repeating characters, return -1. This function should ignore any spaces and should be __case insensitive__ - treat 'a' as eqivalent to 'A'.

6. Given an array of 1's and 0's, find the maximum number of consecutive 1's in this array. If there is any value other than 1 or 0 in the array, this is an error, return -1. The 1's and 0's may be either string or integer values, both are acceptable and should be considered equivalent.

