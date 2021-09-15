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
    let text = new RegExp[CTAG];
    expect(myFunctions.nonCanonicalDna()).toMatch(text);
})

// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip