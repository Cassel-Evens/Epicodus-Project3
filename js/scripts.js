// Buisness Logic 

/* Run a for.Each/For loop to run through the index of an array until it 
until it reaches user imputted value. Then with if statements it will
match corresponding variables to strings and display those in an array
output */
let robogers = function(number){
  if (isNaN(number)) {
    return ("I do not believe this is a number my dear neighbor!")
  } else {
    let robogersArray = [];
    for (let i = 0; i <= number; i++) {
      robogersArray.push(i);
    };
    let robogersArrayMod = robogersArray.map(function(num) {
      let digit = num.toString().split("");
      if (digit.includes("1")) {
        return "\"Let's be neighbors!"
      }
      console.log(robogersArray);
    });
    return robogersArrayMod.join(" ");
  };
};

