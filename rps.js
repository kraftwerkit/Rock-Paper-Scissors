/*Pseudocode

Step 1: Ask the user for their choice.

Step 2: Ask the computer for their choice.

Step 3: Declare the winner (or tie).

Step 4: Add a point to the winner's count.

Step 5: Repeat steps 1-5 four more times.

Step 6: Report the winner and final score.
*/


/*Get the Computer Choice */

function getComputerChoice () {
    let random = Math.floor(Math.random() * 61);
    if (random >= 0 && random <= 20) {
        return "Rock";
    }

    else if (random >= 21 && random <= 40) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

/*A single round of RPS */
function playRound (playerSelection,computerSelection) {
playerSelection = prompt("Rock, Paper or Scissors?");

let finalPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

computerSelection = getComputerChoice();
if (finalPlayerSelection === computerSelection) {
    return `It's a tie! You both picked ${finalPlayerSelection} You: ${playerScore} Computer: ${computerScore} `;
}

else {
    if ((finalPlayerSelection === "Rock" && computerSelection === "Scissors") || 
        (finalPlayerSelection === "Paper" && computerSelection === "Rock") ||
        (finalPlayerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScore++
            return `You win! ${finalPlayerSelection} beats ${computerSelection} You: ${playerScore} Computer: ${computerScore}`;

        }

    else {
        computerScore++
        return `You lose! ${computerSelection} beats ${finalPlayerSelection} You: ${playerScore} Computer: ${computerScore}`
    }
}
}

/* Game of 5 Rounds */
let playerScore = 0 /*Scores are global variables*/
let computerScore = 0

function playGame() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    
    if (computerScore > playerScore) {
       console.log("The computer wins!");
    }

    else if (computerScore === playerScore) {
        console.log("It's a tie!");

    }

    else {
        console.log("You win!");
    }
    }
    
playGame()