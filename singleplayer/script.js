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

function playRound(humanChoice, computerChoice) {
    changePokemon(humanChoice, computerChoice);
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "Rock") {
                result.textContent = "It's a Tie!";
                log.textContent = "Grass types have no special effect on other grass types!"
            }
            else if (computerChoice === "Paper") {
                result.textContent = "You Lose!"
                log.textContent = "Grass types are weak to fire types!";
                computerScore++;
            }
            else if (computerChoice === "Scissors") {
                result.textContent = "You Won!"
                log.textContent = "Grass types are super effective against Water types!";
                humanScore++;
            }
            break;
        case "paper":
            console.log("Paper Played")
            if (computerChoice == "Paper") {
                result.textContent = "It's a Tie!";
                log.textContent = "Fire types have no special effect on other fire types";
            }
            else if (computerChoice == "Scissors") {
                result.textContent = "You Lose!"
                log.textContent = "Fire types are weak to water types!";
                computerScore++;
            }
            else if (computerChoice == "Rock") {
                result.textContent = "You Won!"
                log.textContent = "Fire types are super effective against grass types";
                humanScore++;
            }
            break;
        case "scissors":
            console.log("Scissors Played")
            if (computerChoice == "Scissors") {
                result.textContent = "It's a Tie!";
                log.textContent = "Water types have no special effect on other water types";
            }
            else if (computerChoice == "Rock") {
                result.textContent = "You Lose!"
                log.textContent = "Water types are weak to grass types!";
                computerScore++;
            }
            else if (computerChoice == "Paper") {
                result.textContent = "You Won!"
                log.textContent = "Water types are super effective against fire types!";
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

function changePokemon(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            humanPokemon.src = "../img/bulbasaur.jpg";
            break;
        case "paper":
            humanPokemon.src = "../img/charmander.jpg";
            break;
        case "scissors":
            humanPokemon.src = "../img/squirtle.jpg";
            break;
    }
    switch (computerChoice) {
        case "Rock":
            computerPokemon.src = "../img/bulbasaur.jpg";
            break;
        case "Paper":
            computerPokemon.src = "../img/charmander.jpg";
            break;
        case "Scissors":
            computerPokemon.src = "../img/squirtle.jpg";
            break;
    }
}

let humanScore = 0, computerScore = 0;
const buttons = document.querySelectorAll("button")
const humanResult = document.querySelector("#humanScore")
const humanPokemon = document.querySelector("#humanChoice")
const computerResult = document.querySelector("#computerScore")
const computerPokemon = document.querySelector("#computerChoice")
const result = document.querySelector("#result");
const log = document.querySelector("#log");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(button.id, getComputerChoice());
        }
        humanResult.textContent = "Player: " + humanScore; 
        computerResult.textContent = "Computer: " + computerScore;
    })
    button.addEventListener("mouseover", function(e) {
        if(item) e.classList.add("raise");
    })
})
