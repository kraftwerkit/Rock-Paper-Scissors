/* What do I want to do?
1. User picks their selection via a button.
2. Compiter will generate its choice.
3. Implement logic to declare a winner or tie for the round.
4. Do not add points if a tie.
4. Display the running score.
5. Keep doing the above until a player reaches 5 points.
6. Announce the winner.*/

/* Gets the computer's choice*/
let computerSelection=getComputerChoice()

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

/* Gets the player's Choice */
const rock = document.querySelector("#Rock")
const paper = document.querySelector("#Paper")
const scissors = document.querySelector("#Scissors")

/* Displays round result */
const display = document.querySelector("#Display");


paper.addEventListener("click", () => {
    playRound("Paper", computerSelection);})

rock.addEventListener("click", () => {
    playRound("Rock", computerSelection);})

scissors.addEventListener("click", () => {
    playRound("Scissors", computerSelection);})

    
function playRound (playerSelection,computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        display.textContent=`It's a tie! You both picked ${playerSelection}`;
    }
        
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) 
            
            {
                display.textContent= `You win! ${playerSelection} beats ${computerSelection}`;
        }
        
    else {
        display.textContent= `You lose! ${computerSelection} beats ${playerSelection}`
        }
        }