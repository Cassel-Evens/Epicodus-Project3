<!-- Buisness Logic  -->
Describe: Beep Boop:

Test: "Should run throught the array and return numbers up to imputted number;

Code: const text = ("2");
let number = parseInt(text);
console.log(number);
for (let i = 1; i <= number; i +=1) {
  console.log(i);
} 

Expected Output: (1,2)

Test: Push for index into an array.

Code: let robogersArray = [];
      for (let i = 1; i <= number; i +=1) {
        robogersArray.push(i);
      }
    }
Expected Output: alert [1, 2 ,3 , 4]

Test: If 1 is detected in the array replace and show "Let's be neighbors!"

Code: let robogersArrayMod = robogersArray.map(function(num) {
      let digit = num.toString().split("");
      if (digit.includes("1")) {
        return "\"Let's be neighbors!"
      }
Expected Output: ["lets be neighbors!, ,]

Test: Display numbers not being changed into a phrase;

Code:  else {
        return num;
      }
Expected Output: [0,beep, boop,3,4]

* _https://cassel-evens.github.io/Epicodus-Project3/_ 
