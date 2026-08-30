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

// 4. 
