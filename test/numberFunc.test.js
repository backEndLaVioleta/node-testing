import  myFunctions  from "../index.js";
// one
test('Divisible by 3 returns "Fizz"', () => {
    let text = "Fizz";
    expect(myFunctions.divByThree(3)).toMatch(text);
});
test('Divisible by 5 returns "Buzz"', () => {
    let text = "Buzz";
    expect(myFunctions.divByThree(5)).toMatch(text);
});
test('Divisible by both 3  and 5 returns "FizzBuzz"', () => {
    let text = "FizzBuzz";
    expect(myFunctions.divByThree(5 && 3).match(text));
});
// two
test('Is a leap year, therefore returns true', () => {
    expect(myFunctions.isLeap(1984)).toBeTruthy();
})
test('Is not a leap year, therefore returns false', () => {
    expect(myFunctions.isLeap(1982)).toBeFalsy();
})
// three
test('Canonical DNA: strings accepted should be C, T, A and G only', () => {
    let text = new RegExp(/CTAG/);
    expect(myFunctions.nonCanonicalDna("GTCAGTTTA")).toBe("GTCAGTTTA");
})
test('Canonical DNA: strings accepted should be C, T, A and G only', () => {
    expect(myFunctions.nonCanonicalDna("GTCHAGTMTTÑA")).toBe("GTCAGTTTA");
})
test('Canonical DNA: empty strings should return empty strings', () => {
    expect(myFunctions.nonCanonicalDna("")).toBe("");
})
test('Canonical DNA: strings accepted should be C, T, A and G only', () => {
    expect(myFunctions.nonCanonicalDna("gtca")).toBe("");
})
// four
test('sumArray() should return zero if array is empty', () => {
  let emptyArr = [];
  expect(myFunctions.sumArray(emptyArr)).toEqual(0);
})
test('sumArray() should sum all the positive values', () => {
  var arr = [10, 5, 40, 25];
  expect(myFunctions.sumArray(arr)).toEqual(80);
})
test('sumArray() shouldn´t sum any negative values', () => {
  var arr = [-10, -5, -40, -25];
  expect(myFunctions.sumArray(arr)).toEqual(0);
})
test('sumArray() shouldn´t sum any negative values', () => {
  var arr = [-10, -5, -40, -25, 10, 5];
  expect(myFunctions.sumArray(arr)).toEqual(15);
})
test('sumArray() should convert string numbers into integer', () => {
  var arr = [-10, "5", -40, "25"];
  expect(myFunctions.sumArray(arr)).toEqual(30);
})
test('sumArray() shouldn´t convert any NaN', () => {
  var arr = [-10, "hola", -40, "25"];
  expect(myFunctions.sumArray(arr)).toEqual(25);
})
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip

// https://stackoverflow.com/questions/50920180/filter-a-javascript-array-of-strings-matching-a-sequence-of-characters


