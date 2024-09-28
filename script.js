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
