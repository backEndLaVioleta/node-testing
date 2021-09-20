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
      let sum = arr.map((el) => parseInt(el)).filter((e) => (Number.isInteger(e) && (e > 0))).reduce((a,b) => a + b, 0);
      return sum;
    },
    /* maxNumber(arr){
      let counter = 0;
      let maxCount = 0;
      
      arr.forEach((number) =>{
        if(number != 0 && number != 1) {
          throw new Error(-1);
        } 
        if(number == 1) {
          counter += +number;
          maxCount = Math.max(maxCount, counter);
        } else if(number == 0){
          // helpMe = true;
          counter = 0;
          console.log(counter);
        }
      })
      return maxCount;
    } */
     maxNumber(arr){
      if (/[^0-1]/g.test(arr.join('')))
        throw new Error(-1); 

      return (arr.join('')
                 .split('0')
                 .reduce((acumulador, elemento)=> Math.max(acumulador, elemento.length), 0)); 
    }
    // tactica

}
export default myFunctions;


