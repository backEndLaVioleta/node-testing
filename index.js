// obj myFunctions
 const myFunctions = {
    divByThree(num){
        let text = "";
        (num % 3 == 0) ? text = "Fizz" :
        (num % 5 == 0) ? text = "Buzz" :
        ((num % 5 == 0) && (num % 3 == 0)) ? text = "FizzBuzz" : undefined;
        return text;
    },
    isLeap(num){
        let myBoolean = false;
        (num % 100 === 0) ? myBoolean = num % 400 === 0 : myBoolean = num % 4 === 0;
        return myBoolean;
    },
    nonCanonicalDna(str){
        let text = ['C', 'T', 'G', 'A'];
        let newStr = "";
        for(let i = 0; i < str.length; i++){
          (text.indexOf(str[i]) !== -1) ? newStr = newStr + str[i] :
          (str == "") ? newStr = "" : undefined;
        }

        return newStr;
    },
    sumArray(arr){
      let sum = 0;
      sum = arr.map((el) => parseInt(el)).filter((e) => (Number.isInteger(e) && (e > 0))).reduce((a,b) => a + b, 0);
      return sum;
    }
}
export default myFunctions;
