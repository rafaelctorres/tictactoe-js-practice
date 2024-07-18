const buttons = document.querySelector("ul");
const divResults = document.querySelector(".results");
const lastRoundChoices = document.querySelector(".lastRoundChoices");
const lastRoundWinner = document.querySelector(".lastRoundWinner");
const gameWinner = document.querySelector(".gameWinner")
const scoresTracker = document.querySelector(".scoresTracker")

let playerScore = 0;
let computerScore = 0;


buttons.addEventListener('click', function (e){
    let target = e.target.id;
    let currentPlayerChoice;
  
    currentPlayerChoice = target;
    playRound(currentPlayerChoice, getComputerChoice)  
    showScores();
    gameWinner.textContent = '';
    if(playerScore > 2 || computerScore > 2){
                showFinalResult();
            }
    
});


function showScores(){
    scoresTracker.textContent = "placar atual: player " + playerScore + " x " + computerScore + " computador."; 
}


function getComputerChoice(){
  let randomizer = Math.floor(Math.random()*3);
  switch (randomizer){
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissor";
  }
}

function clearScores(){
    playerScore = 0;
    computerScore = 0;
}

function showFinalResult(){
    if (playerScore > computerScore){
        gameWinner.textContent = "voce ganhou! o placar ficou: " + playerScore + " a " + computerScore;
        console.log("voce ganhou! o placar ficou: " + playerScore + " a " + computerScore);
    } else if(computerScore > playerScore){
        gameWinner.textContent = "voce perdeu :( o placar ficou: " + computerScore + " a " + playerScore;
        console.log("voce perdeu :( o placar ficou: " + computerScore + " a " + playerScore);
    } else {
        console.log("it's a tie!");
    }
    clearScores();
}


function playRound(playerChoice, computerChoice){
    const roundComputerChoice = computerChoice();
    const roundPlayerChoice = playerChoice;
    
    function showRoundChoices(){
        lastRoundChoices.textContent = "voce jogou: " + roundPlayerChoice + ", o computador jogou: " +                             roundComputerChoice;
    }

    function showRoundWinner(winner){
        //criar paragrafo
        lastRoundWinner.textContent = winner;
    }

  
    showRoundChoices();

    console.log("voce jogou: " + roundPlayerChoice);
    console.log("o computador jogou: " + roundComputerChoice);

    switch (roundPlayerChoice){
    case "rock":
        if (roundComputerChoice === "rock"){
        console.log("it's a tie!");
        showRoundWinner("it's a tie!")
        } else if (roundComputerChoice === "paper"){
        console.log("computer wins!");
        showRoundWinner("computer wins!")
        computerScore += 1;
        } else if (roundComputerChoice === "scissor") {
        console.log("player wins!");
        showRoundWinner("player wins!")
        playerScore += 1;
        }
        break;
    case "paper":
        if (roundComputerChoice === "rock"){
        console.log("player wins!");
        showRoundWinner("player wins!");
        playerScore += 1;
        } else if (roundComputerChoice === "paper"){
        console.log("it's a tie!");
        showRoundWinner("it's a tie!");
        } else if (roundComputerChoice === "scissor") {
        console.log("computer wins!");
        showRoundWinner("computer wins!");
        computerScore += 1;
        }
        break;
    case "scissor":  
        if (roundComputerChoice === "rock"){
        console.log("computer wins!");
        showRoundWinner("computer wins!");
        computerScore += 1;
        } else if (roundComputerChoice === "paper"){
        console.log("player wins!");
        showRoundWinner("player wins!");
        playerScore += 1;
        } else if (roundComputerChoice === "scissor") {
        console.log("it's a tie!");
        showRoundWinner("it's a tie!");
        }
        break;
        }
}

//whats left: style manipulation: color, size of texts. reset game button?
//delete UL choice buttons.