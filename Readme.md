# _Epicodus-Project3_

#### By _**Cassel Evens**_

#### _This project shows my learning of loops and arrays as well as how to display them into an html form._

## Technologies Used

* _HTML_
* _CSS_
* _jQuery_
*_Javascript_

## This webpage will hopefully be used for a insight into Mr. Rodgers computer brain.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the now installed directory.
* Open the file "index.html" in your browser.
* Navigate to the top directory.

## Known Bugs
* None

## Git Hub Pages Link

* _https://cassel-evens.github.io/Epicodus-Project3/_ 


## License
MIT


Copyright (c) 10-23-2021 _Cassel Evens_

<!-- Buisness Logic  -->
Describe: Beep Boop:

Test: "Should run throught the array and return numbers up to imputted number;

Code: const text = ("2");
let number = parseInt(text);
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

