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
