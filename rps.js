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
playerSelection = prompt("Rock, Paper or Scissors?")
computerSelection = getComputerChoice();
if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
}

else {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }

    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
}

console.log(playRound())