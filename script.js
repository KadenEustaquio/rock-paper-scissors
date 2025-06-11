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
            case "Rock":
                if (computerChoice == "Rock") {
                    console.log("It's a Tie!");
                }
                else if (computerChoice == "Paper") {
                    console.log("You Lose! Paper beats Rock.")
                    computerScore++;
                }
                else if (computerChoice == "Scissors") {
                    console.log("You Win! Rock beats Scissors.")
                    humanScore++;
                }
                break;
            case "Paper":
                if (computerChoice == "Paper") {
                    console.log("It's a Tie!");
                }
                else if (computerChoice == "Scissors") {
                    console.log("You Lose! Scissors beats Paper.")
                    computerScore++;
                }
                else if (computerChoice == "Rock") {
                    console.log("You Win! Paper beats Rock.")
                    humanScore++;
                }
                break;
            case "Scissors":
                if (computerChoice == "Scissors") {
                    console.log("It's a Tie!");
                }
                else if (computerChoice == "Rock") {
                    console.log("You Lose! Rock beats Scissors.")
                    computerScore++;
                }
                else if (computerChoice == "Paper") {
                    console.log("You Win! Scissors beats Paper.")
                    humanScore++;
                }
                break;
        }
    }

    

function playGame() {
    
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose!");
    }
    else {console.log("It's a tie!");}
}

let humanScore = 0, computerScore = 0;

playGame();

