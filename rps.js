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
    if (Math.floor(Math.random() * 61) >= 0 && (Math.floor(Math.random() * 61) <= 20)) {
        return "Rock";
    }

    else if (Math.floor(Math.random() * 61) >= 21 && (Math.floor(Math.random() * 61) <= 40)) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

/*A single round of RPS */

function playRound (playerSelection,computerSelection) {
}