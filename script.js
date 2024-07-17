const buttons = document.querySelector("ul");
const divResults = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;
let currentPlayerChoice;

buttons.addEventListener('click', function (e){
    let target = e.target;
    //return target.id;
    switch (target.id) {
        case "rock": 
            currentPlayerChoice = "rock";
            playRound(currentPlayerChoice,getComputerChoice);
            if(playerScore > 2 || computerScore > 2){
                showResult();
            }
            break;
        case "paper": 
            currentPlayerChoice = "paper";
            playRound(currentPlayerChoice,getComputerChoice);
            if(playerScore > 2 || computerScore > 2){
                showResult();
            }
            break;
        case "scissor": 
            currentPlayerChoice = "scissor";
            playRound(currentPlayerChoice,getComputerChoice);
            if(playerScore > 2 || computerScore > 2){
                showResult();
            }
            break;        
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

function showResult(){
    if (playerScore > computerScore){
        console.log("voce ganhou! o placar ficou: " + playerScore + " a " + computerScore);
    } else if(computerScore > playerScore){
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
        const thisRound = document.createElement("p");
        thisRound.textContent = "voce jogou: " + roundPlayerChoice + " o computador jogou: " + roundComputerChoice
        divResults.appendChild(thisRound);
        //append child
    }

    function showWinner(winner){
        //criar paragrafo
        const thisRound = document.createElement("p");
        thisRound.textContent = winner;
        divResults.appendChild(thisRound);
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




