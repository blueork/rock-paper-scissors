console.log("Hello World");


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100);

  if(choice % 3 == 0)
    return "rock";
  else if(choice % 5 == 0)
    return "paper";
  else
    return "scissors";
}

function getHumanChoice() {
  let humanChoice = prompt("Select your weapon: rock paper scissors");
  return humanChoice.toLowerCase();   // incase the user enters a capitalized string
}

//let humanScore = 0, computerScore = 0;

function playGame() {
  let humanScore = 0, computerScore = 0;

  function playRound(humanChoice, computerChoice) {
  
    if(humanChoice.localeCompare(computerChoice) == 0)
      console.log("Tie! Both chose " + humanChoice);
    else if(humanChoice.localeCompare("rock") == 0) {
      if(computerChoice.localeCompare("paper") == 0) {
        console.log("You Lost! Paper beats Rock");
        ++computerScore;
      }
      else {
        console.log("You Won! Rock beats Scissors");
        ++humanScore;
      }
    }
    else if(humanChoice.localeCompare("paper") == 0) {
      if(computerChoice.localeCompare("rock") == 0) {
        console.log("You Won! Paper beats Rock");
        ++humanScore;
      }
      else {
        console.log("You Lost! Scissors beats Paper");
        ++computerScore;
      }
    }
    else {
      if(computerChoice.localeCompare("rock") == 0) {
        console.log("You Lost! Rock beats Scissors");
        ++computerScore;
      }
      else {
        console.log("You Won! Scissors beats Paper");
        ++humanScore;
      }
    }
  }

  let numOfRounds = 5;

  for(let i = 0; i < numOfRounds; ++i) {

    playRound(getHumanChoice(), getComputerChoice());
  }

  if(humanScore == computerScore)
    console.log("Tie! Both scored " + humanScore);
  else if(humanScore > computerScore)
    console.log("You Won! " + humanScore + " vs " + computerScore);
  else
    console.log("You Lost! " + humanScore + " vs " + computerScore);

}

playGame();