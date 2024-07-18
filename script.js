const buttons = document.querySelector("ul");
const divResults = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;
let currentPlayerChoice;
let lastRoundChoices = document.querySelector(".lastRoundChoices");
let lastRoundWinner = document.querySelector(".lastRoundWinner");
let gameWinner = document.querySelector(".gameWinner")
let scoresTracker = document.querySelector(".scoresTracker")

function showScores(){
    scoresTracker.textContent = "placar atual: player " + playerScore + " x " + computerScore + " computador."; 
}

buttons.addEventListener('click', function (e){
    let target = e.target.id;
    currentPlayerChoice = target;
    playRound(currentPlayerChoice, getComputerChoice)  
    showScores();
    if(playerScore > 2 || computerScore > 2){
                showFinalResult();
            }
});

function getComputerChoice(){
  let randomizer = Math.floor(Math.random()*3);
 
  switch (randomizer){
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissor";
  }
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
}



function playRound(playerChoice, computerChoice){
    const roundComputerChoice = computerChoice();
    const roundPlayerChoice = playerChoice;
    
    function showRoundChoices(){
        //criar paragrafo
        lastRoundChoices.textContent = "voce jogou: " + roundPlayerChoice + ", o computador jogou: " +                             roundComputerChoice;
        //append child
    }

    function showWinner(winner){
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
        showWinner("it's a tie!")
        } else if (roundComputerChoice === "paper"){
        console.log("computer wins!");
        showWinner("computer wins!")
        computerScore += 1;
        } else if (roundComputerChoice === "scissor") {
        console.log("player wins!");
        showWinner("player wins!")
        playerScore += 1;
        }
        break;
    case "paper":
        if (roundComputerChoice === "rock"){
        console.log("player wins!");
        showWinner("player wins!");
        playerScore += 1;
        } else if (roundComputerChoice === "paper"){
        console.log("it's a tie!");
        showWinner("it's a tie!");
        } else if (roundComputerChoice === "scissor") {
        console.log("computer wins!");
        showWinner("computer wins!");
        computerScore += 1;
        }
        break;
    case "scissor":  
        if (roundComputerChoice === "rock"){
        console.log("computer wins!");
        showWinner("computer wins!");
        computerScore += 1;
        } else if (roundComputerChoice === "paper"){
        console.log("player wins!");
        showWinner("player wins!");
        playerScore += 1;
        } else if (roundComputerChoice === "scissor") {
        console.log("it's a tie!");
        showWinner("it's a tie!");
        }
        break;
        }
}


