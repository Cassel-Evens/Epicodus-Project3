// Buisness Logic 
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
        return "\Let's be neighbors!";
      } else if (digit.includes("2")) {
        return "\Boop";
      } else if (digit.includes("3")) {
        return "\Beep";
      } else if (digit.includes("8")) {
        return "\Join the neighborhood";
      } else if (digit.includes("9")) {
        return "\Wow you know some high numbers!";
      } else if (digit.includes("4")) {
        return "\This is my fave number";
      } else {
        return num;
      }
    });
    return robogersArrayMod.join(", ");
  };
};

//UI Logic
$(document).ready(function() {
  $("form#your-number").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("input#Number")).val();
    let robogerOutput = robogers(number);
    $("#your-number-phrase").text(robogerOutput);
  });
});
// $(document).ready(function() {
//   $("form#mr-robogers").submit(function(event) {
//     event.preventDefault();
//     var number = parseInt($("input#input").val());
//     var robogerOutput = robogers(number);
//     $("#output").text(robogerOutput);
//     $("#robogers").fadeIn();
//   });
// });