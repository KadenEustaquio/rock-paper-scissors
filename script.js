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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());