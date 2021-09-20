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
});
test('sumArray() shouldn´t convert any NaN', () => {
  var arr = [-10, "hola", -40, "25"];
  expect(myFunctions.sumArray(arr)).toEqual(25);
});
// count consecutive one
test('[1,1,1] should return 3', () => {
  var arr = [1,1,1];
  expect(myFunctions.maxNumber(arr)).toBe(3);
});
test('[1,1,1,0] should return 3', () => {
  var arr = [1,1,1,0];
  expect(myFunctions.maxNumber(arr)).toBe(3);
});
test('[1,1,1,0] should return 4', () => {
  var arr = [1,1,1,1];
  expect(myFunctions.maxNumber(arr)).toBe(4);
});

// if 0, count ones straight
test('[1,1,0,1] should return 2', () => {
  var arr = [1,1,0,1];
  expect(myFunctions.maxNumber(arr)).toBe(2);
});
// if secuence of ones, return bigger array of ones
test('[1,1,0,1,1,1] should return 2', () => {
  var arr = [1,1,0,1,1,1];
  expect(myFunctions.maxNumber(arr)).toBe(3);
});
// if neither 1 or 0 error -1
test('[1,1,"e",1,1,1] should return -1', () => {
  var arr = [1,1,"e",1,1,1];
  const err = new Error(-1)
  expect(() => myFunctions.maxNumber(arr)).toThrow(err);
});
test('[1,"e",0,1] should return -1',()=>{
  const error = new Error(-1);
  expect(() => myFunctions.maxNumber([1,"e",0,1])).toThrow(error);
  
})
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip

// https://stackoverflow.com/questions/50920180/filter-a-javascript-array-of-strings-matching-a-sequence-of-characters

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max


