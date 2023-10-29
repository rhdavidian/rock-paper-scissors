const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('div');

rock.addEventListener('click', () => {
    let a = 'rock';
    let yourScore = document.getElementById('yourScore');
    let compScore = document.getElementById('compScore');
    let ties = document.getElementById('ties');

    let score = yourScore.innerHTML;
    let cScore = compScore.innerHTML;
    let t = ties.innerHTML;

    let playerSelection = rock.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
        if (result == 'win') {
            yourScore.innerHTML = (+score + 1);
        } else if (result == 'lose'){
            compScore.innerHTML = (+cScore + 1);
        } else {
            ties.innerHTML = + (+t + 1);
        }
});

paper.addEventListener('click', () => {
    let a = 'paper';
    let yourScore = document.getElementById('yourScore');
    let compScore = document.getElementById('compScore');
    let ties = document.getElementById('ties');
    let score = yourScore.innerHTML;
    let cScore = compScore.innerHTML;
    let t = ties.innerHTML;

    let playerSelection = paper.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
        if (result == 'win') {
            yourScore.innerHTML = (+score + 1);
        } else if (result == 'lose'){
            compScore.innerHTML = (+cScore + 1);
        } else {
            ties.innerHTML = + (+t + 1);
        }
})

scissors.addEventListener('click', () => {
    let a = 'scissors';
    let yourScore = document.getElementById('yourScore');
    let compScore = document.getElementById('compScore');
    let ties = document.getElementById('ties');
    let score = yourScore.innerHTML;
    let cScore = compScore.innerHTML;
    let t = ties.innerHTML;

    let playerSelection = scissors.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
        if (result == 'win'){
            yourScore.innerHTML = +score + 1;
        } else if (result == 'lose') {
            compScore.innerHTML = +cScore + 1;
        } else {
            ties.innerHTML = +t + 1;
        }
})


    // yourScore.innerHTML = +score + 1;


    // let playerScore = 0;
    // let computerScore = 0;
    // let tie = 0;
    // let playerSelection = rock.id;
    // let computerSelection = getComputerChoice();
    // let result = playRound(playerSelection, computerSelection);
    // div.textContent += result + ' '; 
    //     if (result == 'win') {
    //        yourScore.textContent = playerScore++;
    //     } else if (result == 'lose') {
    //        compScore.textContent = computerScore++;
    //     } else {
    //        ties.textContent = tie++;
    //     }
    //     return result;

function getComputerChoice (){
    let array = ['rock', 'paper', 'scissors'];
    let choice = array[Math.floor(Math.random() * array.length)];
    return choice;
}

// function game(n, playerSelection) {
//     let playerScore = 0; 
//     let computerScore = 0;
//     let ties = 0;
//     let results = [];

//     for (i = 0; i < n; i++){
//         let playerSelection = prompt("Type in Rock, Paper, or Scissors.").toLowerCase();
//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(playerSelection, computerSelection);

//         console.log(roundResult)
//         console.log(("Round " + (i +1) + ":"), roundResult);
//         results.push(roundResult);
//         if (roundResult == "win") {
//             playerScore++; 
//         } else if (roundResult == "lose") {
//             computerScore++;
//         }
//         else {
//             ties ++;
//         }
//         console.log("Player: " + playerScore, "Computer: " + computerScore, "Ties: " + ties);
//         }    
//         if (playerScore > computerScore) {
//             alert("You beat the computer!");
//         } else if (playerScore < computerScore) {
//             alert("The computer beat you.")
//         } else {
//             alert("Tie!")
//         }   
//     return results;   
// }

function playRound(playerSelection, computerSelection) {
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

// let numGames = prompt("How many games would you like to play? We suggest 5.");
// let numGames = 1;

// let results = game(numGames, "rock");
 