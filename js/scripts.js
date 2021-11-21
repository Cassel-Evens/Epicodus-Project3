// Buisness Logic 

/* Run a for.Each/For loop to run through the index of an array until it 
until it reaches user imputted value. Then with if statements it will
match corresponding variables to strings and display those in an array
output */

// const text = ("2");
function numberReplacer(number) {
  // const numberArray = text.split (" ")
  // let number = parseInt(text);
  // console.log(number);
  const array = [number];
  let numberArray = [];
  for (let i = 1; i <= number; i +=1) {
    console.log(i);
    numberArray.push(array);
    console.log(numberArray);
  } 
}

//push index counting up by 1 up to users inputted number into an array
/*Then run if/if else statements that if a number is found in the [i] to replace
it with a certain phrase or word */

//UI Logic 

$(document).ready(function(){
  $("form#your-number").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const yourNumber = numberReplacer(passage);
    $("#your-number-phrase").html(yourNumber);
  });
});