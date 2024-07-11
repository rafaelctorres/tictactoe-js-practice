let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(){
  let playerChoice= prompt("Pedra, papel ou tesoura?", "qual vai ser?")
  switch (playerChoice.toLowerCase()){
    case "pedra": return "rock";
    case "papel": return "paper";
    case "tesoura": return "scissor"
    default: return undefined;
 }
}

function getComputerChoice(){
  let randomizer = Math.floor(Math.random()*3);
 
  switch (randomizer){
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissor";
  }
}

console.log(getPlayerChoice());
console.log(getComputerChoice());

switch (getPlayerChoice()){
  case "rock":
    if (getComputerChoice() === "rock"){
      console.log("it's a tie!");
    } else if (getComputerChoice() === "paper"){
      console.log("computer wins!");
      computerScore += 1;
    } else if (getComputerChoice() === scissor) {
      console.log("player wins!");
      playerScore += 1;
    }
    break;
  case "paper":
    if (getComputerChoice() === "rock"){
      console.log("player wins!");
      playerScore += 1;
    } else if (getComputerChoice() === "paper"){
      console.log("it's a tie!");
    } else if (getComputerChoice() === "scissor") {
      console.log("computer wins!");
      computerScore += 1;
      break;
      }
    case "scissor":  
      if (getComputerChoice() === "rock"){
      console.log("computer wins!");
      computerScore += 1;
    } else if (getComputerChoice() === "paper"){
      console.log("computer wins!");
      computerScore += 1;
    } else if (getComputerChoice() === scissor) {
      console.log("it's a tie!");
      break;
    }
    }



// commit message: Add functions to get values and calculate a winner
//
//Functions get input either provided randomly or by a prompt to return
//their values. added switch/case statement that calculates the winner,
//although it is not inside of a function and there's no global variable
//to store player's or computer's choice, so through the conditional that
//determines the winners, the values are calculate once again.