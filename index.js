// 1. Create function named getComputerChoice
// 2. Declare variable named randomNum, inside function, & assign it the value Math.floor(Math.random() * 3)
// 3. IF randomNum equals 0 (Toujours dans la fonction)
//      - return "Paper"
//    ELSE IF randomNum equals 1
//      - return "Scissors"
//    ELSE
//      - return "Rock"

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "Paper";
  } else if (randomNum === 1) {
    return "Scissors";
  } else {
    return "Rock";
  }
}

// 4. Create function named getHumanChoice
// 5. Create variable called userInput, inside function
// 6. Get user's input with the code, prompt("Choose rock, paper, or scissors", ""); inside the variable userInput
//Correction:
//4. Create variable called userInput
//5. Get user's input with the code, prompt("Choose rock, paper, or scissors", ""); inside the variable userInput
//6. Create function named getHumanChoice
//7. Output userInput, inside the function

let userInput = prompt("Choose rock, paper, or scissors", "");

function getHumanChoice() {
  return userInput;
}
console.log(userInput);
console.log(getHumanChoice());

// 8. Create the variables humanScore & computerScore
// 9. Initialize the 2 variables with the value 0

let humanScore = 0;
let computerScore = 0;
