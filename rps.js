/* Gets the computer's choice*/
let computerSelection=getComputerChoice()

const choices = ["Rock","Paper","Scissors"]

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
    }

/* Gets the player's choice */
const rock = document.querySelector("#Rock")
const paper = document.querySelector("#Paper")
const scissors = document.querySelector("#Scissors")

/* Displays round result */
const display = document.querySelector("#Display");
display.textContent = "Click any button to begin."

/* Create variables for scores. Might need to move to function */
let playerScore = 0;
let computerScore = 0;

/* Elements for Scoring*/
const scorekeeper = document.querySelector(".Scoring")
const player = document.querySelector(".Player")
const computer = document.querySelector(".Computer")

/* Add event listeners for the buttons */
paper.addEventListener("click", () => {
    playRound("Paper", computerSelection);
    updateScores(playerScore, computerScore);
    finalResult();})

rock.addEventListener("click", () => {
    playRound("Rock", computerSelection);
    updateScores(playerScore, computerScore);
    finalResult();})

scissors.addEventListener("click", () => {
    playRound("Scissors", computerSelection);
    updateScores(playerScore, computerScore);
    finalResult();})

/* A single round of RPS */
function playRound (playerSelection,computerSelection) {
    
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        display.textContent=`It's a tie! You both picked ${playerSelection}.`;
    }
        
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) 
            
            { playerScore++
                display.textContent= `You win! ${playerSelection} beats ${computerSelection}.`;
        }
        
    else {
        computerScore++
        display.textContent= `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
        } 

/* Announces final results and resets game. */
function finalResult() {
    const outcome = document.createElement("p")
    if (playerScore ==5) {
        display.append(outcome)
        outcome.textContent = `You won the game! Click any button to play again.`;
        playerScore =0;
        computerScore=0;
    }

    else if (computerScore ==5) {
        display.append(outcome)
        outcome.textContent = `You lost the game! Click any button to play again.`;
        playerScore=0;
        computerScore=0;

    }}
    
/* Keeps score */
function updateScores(playerScore, computerScore) {
        player.textContent = `Your Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`;

}