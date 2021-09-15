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
    } 
}
export default myFunctions;
