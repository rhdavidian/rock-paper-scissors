// Create a string variable, input by the user, that says Rock,
// Paper, or Scissors.

// Create a string variable that is input from the computer that is one of the same three 

// Write a function that compares the string inputs and returns a winner, or a draw
//create a function that calls the main game function five times, and keeps a score to five
//


function getComputerChoice (){
    let array = ['rock', 'paper', 'scissors'];
    let choice = array[Math.floor(Math.random() * array.length)];
    return choice;
}


function game(n) {
    let playerScore = 0; 
    let computerScore = 0;
    let ties = 0;
    let results = []
    for (i = 0; i < n; i++){
        let playerSelection = prompt("Type in Rock, Paper, or Scissors.").toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult)
        console.log(("Round " + (i +1) + ":"), roundResult);
        results.push(roundResult);
        if (roundResult == "win") {
            playerScore++; 
        } else if (roundResult == "lose") {
            computerScore++;
        }
        else {
            ties ++;
        }
        console.log("Player: " + playerScore, "Computer: " + computerScore, "Ties: " + ties);
        }    
        if (playerScore > computerScore) {
            alert("You beat the computer!");
        } else if (playerScore < computerScore) {
            alert("The computer beat you.")
        } else {
            alert("Tie!")
        }   
    return results;   
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == "rock"){
        if (computerSelection == "rock") {
            return "tie";
        } else if (computerSelection == "paper") {
            return "lose";
        } else {
            return "win";
        }
          
    } 
    if (playerSelection == "paper"){
        if  (computerSelection == "rock"){
            return "win";
        } else if (computerSelection == "paper") {
            return "tie";
        } else {
            return "lose";
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            return "win";
        } else if (computerSelection == "paper") {
            return "tie";
        } else {
            return "lose";
        }
    }
}

let numGames = prompt("How many games would you like to play? We suggest 5.");

let results = game(numGames);
 

// console.log(results);
//   console.log(playRound(playerSelection, computerSelection));
