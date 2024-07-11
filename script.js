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

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    playRound(getPlayerChoice, getComputerChoice);
    playRound(getPlayerChoice, getComputerChoice);
    playRound(getPlayerChoice, getComputerChoice);
    playRound(getPlayerChoice, getComputerChoice);
    playRound(getPlayerChoice, getComputerChoice);
    showResult();
    
    function showResult(){
        if (playerScore > computerScore){
            console.log("voce ganhou! o placar ficou: " + playerScore + " a " + computerScore);
        } else if(computerScore > playerScore){
            console.log("voce perdeu :( o placar ficou: " + computerScore + " a " + playerScore);
        } else {
            console.log("it's a tie!")
        }
    }

    function playRound(playerChoice, computerChoice){
        const roundComputerChoice = computerChoice();
        const roundPlayerChoice = playerChoice();
    
        console.log("voce jogou: " + roundPlayerChoice);
        console.log("o computador jogou: " + roundComputerChoice);
    
        switch (roundPlayerChoice){
        case "rock":
            if (roundComputerChoice === "rock"){
            console.log("it's a tie!");
            } else if (roundComputerChoice === "paper"){
            console.log("computer wins!");
            computerScore += 1;
            } else if (roundComputerChoice === "scissor") {
            console.log("player wins!");
            playerScore += 1;
            }
            break;
        case "paper":
            if (roundComputerChoice === "rock"){
            console.log("player wins!");
            playerScore += 1;
            } else if (roundComputerChoice === "paper"){
            console.log("it's a tie!");
            } else if (roundComputerChoice === "scissor") {
            console.log("computer wins!");
            computerScore += 1;
            }
            break;
        case "scissor":  
            if (roundComputerChoice === "rock"){
            console.log("computer wins!");
            computerScore += 1;
            } else if (roundComputerChoice === "paper"){
            console.log("player wins!");
            playerScore += 1;
            } else if (roundComputerChoice === "scissor") {
            console.log("it's a tie!");
            }
            break;
            }
    }
    

}

playGame();



