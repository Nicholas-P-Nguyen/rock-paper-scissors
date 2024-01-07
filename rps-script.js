// getting a reference to the node
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');

// adding event listener. waiting for click, if clicked will run the function playround.
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);


function getComputerChoice() 
{
    const choices = ["✊", "🖐️", "✌️"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

// global variables to keep track of score 
let botWinCount = 0; 
let userWinCount = 0;

function playRound(event) 
{
    let computerSelection = getComputerChoice();

    // getting the user input when the click on a button
    let btnClicked = event.target.textContent; 

    // getting the reference to the node in the DOM
    let user = document.querySelector('.user');
    let bot = document.querySelector('.bot');
    let prompt = document.querySelector('.prompt');
    let result = document.querySelector('.result');

    if (btnClicked === computerSelection) 
    {
        prompt = `You picked ${btnClicked}, and the computer picked ${computerSelection}.`;
        result.textContent = "IT'S A TIE!";
    }
    else if (btnClicked === "✊" && computerSelection === "✌️" || 
            btnClicked === "🖐️" && computerSelection === "✊" ||
            btnClicked === "✌️" && computerSelection === "🖐️")
    {
        userWinCount++;
        user.textContent = "Player score: " + userWinCount;
        prompt.textContent = `You picked ${btnClicked}, and the computer picked ${computerSelection}.`;
        result.textContent = "YOU WIN!";
    }
    else 
    {
        botWinCount++;
        bot.textContent = "Computer score: " + botWinCount;
        prompt.textContent = `You picked ${btnClicked}, and the computer picked ${computerSelection}.`;
        result.textContent = "YOU LOSE!";
    }
}




