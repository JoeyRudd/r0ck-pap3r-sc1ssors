let humanScore = 0;
let computerScore = 0;

playGame();

// plays round and decides winner for the round
function playRound(humanChoice, computerChoice) {
        if (humanChoice && computerChoice) {
            console.log("You Tie");
        }
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("Computer wins!");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win");
                humanScore++;
            }
        }else if(humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win!");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("Computer Wins");
                computerScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("Computer wins!");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win");
                humanScore++;
            }
        }

}


function getHumanChoice() {
    // get user choice
    return prompt("Please chose rock, paper, or siccors: ").toLowerCase();
}

function getComputerChoice() {
    // pick random number between 1-3
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    }
}

function getWinner() {
    if(humanScore === computerScore) {
        return "It was a tie!";
    } else if (humanScore >= computerScore) {
        return "You win the game!";
    } else {
        return "The computer wins the game!";
    }
}


function playGame () {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(getWinner());
}
