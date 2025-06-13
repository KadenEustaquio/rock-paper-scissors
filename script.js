function getComputerChoice() {
    let number = 3*Math.random();
    if (number < 1) {
        return "Rock";
    }
    else if (number > 2) {
        return "Scissors";
    }
    return "Paper";
}

function getHumanChoice() {
    let choice = prompt("Choose one! Rock, Paper or Scissors?")
    do {
        if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
            return choice;
        }
        choice = prompt("Try Again! Rock, Paper or Scissors?")
    } while (choice != "Rock" || choice != "Paper" || choice != "Scissors")
    
}

function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                console.log("Rock Played")
                if (computerChoice === "Rock") {
                    console.log("Tie")
                    log.textContent = "It's a Tie!";
                }
                else if (computerChoice === "Paper") {
                    console.log("Lose")
                    log.textContent = "You Lose! Paper beats Rock.";
                    computerScore++;
                }
                else if (computerChoice === "Scissors") {
                    console.log("Win")
                    log.textContent = "You Win! Rock beats Scissors.";
                    humanScore++;
                }
                break;
            case "paper":
                console.log("Paper Played")
                if (computerChoice == "Paper") {
                    log.textContent = "It's a Tie!";
                }
                else if (computerChoice == "Scissors") {
                    log.textContent = "You Lose! Scissors beats Paper.";
                    computerScore++;
                }
                else if (computerChoice == "Rock") {
                    log.textContent = "You Win! Paper beats Rock.";
                    humanScore++;
                }
                break;
            case "scissors":
                console.log("Scissors Played")
                if (computerChoice == "Scissors") {
                    log.textContent = "It's a Tie!";
                }
                else if (computerChoice == "Rock") {
                    log.textContent = "You Lose! Rock beats Scissors.";
                    computerScore++;
                }
                else if (computerChoice == "Paper") {
                    log.textContent = "You Win! Scissors beats Paper.";
                    humanScore++;
                }
                break;
        }
        if (humanScore === 5) {
            log.textContent = "You win! Reload this page to play again!";
        }
        if (computerScore === 5) {
            log.textContent = "You lose! Reload this page to play again!";
        }
    }


let humanScore = 0, computerScore = 0;
const buttons = document.querySelectorAll("button")
const humanResult = document.querySelector("#humanScore")
const computerResult = document.querySelector("#computerScore")
const log = document.querySelector("#log");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore !== 5 || computerScore !== 5) {
            playRound(button.id, getComputerChoice());
        }
        humanResult.textContent = "Your Score: " + humanScore; 
        computerResult.textContent = "Computer's Score: " + computerScore;
    })
})
