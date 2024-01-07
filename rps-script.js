function getComputerChoice() 
{
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

let botWin = 0; 
let userWin = 0;
let tieCount = 0;
function playRound(event) 
{
    // local variable to store the string that declares the winner
    let output = "";
    let btnClicked = event.target.textContent; 
    let computerSelection = getComputerChoice();
    let user = document.querySelector('.user');
    let bot = document.querySelector('.bot');
    let tie = document.querySelector('.tie');
    let result = document.querySelector('.result');

    if (btnClicked === "ROCK") 
    {
        switch(computerSelection)
        {
            case "ROCK":
                output = "It's a tie!";
                tieCount++;
                tie.textContent = "Tie: " + tieCount;
                result.textContent = "Result: You chose rock, and the bot chose rock! It's a tie.";
                break;
            case "PAPER":
                output = "You lose!";
                botWin++;
                bot.textContent = "Games bot won: " + botWin;
                result.textContent = "Result: You chose rock, and the bot chose paper! You lose!";
                break;
            case "SCISSORS":
                output = "You win!";
                userWin++;
                user.textContent = "Games you've won: " + userWin;
                result.textContent = "Result: You chose rock, and the bot chose scissors! You win!";
                break;
        }
    }
    else if (btnClicked === "PAPER")
    {
        switch(computerSelection)
        {
            case "ROCK":
                output = "You win!";
                userWin++;
                user.textContent = "Games you've won: " + userWin;
                result.textContent = "Result: You chose paper, and the bot chose rock! You win!";
                break;
            case "PAPER":
                output = "It's a tie!";
                tieCount++;
                tie.textContent = "Tie: " + tieCount;
                result.textContent = "Result: You chose paper, and the bot chose paper! It's a tie!";
                break;
            case "SCISSORS":
                output = "You lose!";
                botWin++;
                bot.textContent = "Games bot won: " + botWin;
                result.textContent = "Result: You chose paper, and the bot chose scissors! You lose!";
                break;
        }
    }
    else 
    {
        switch(computerSelection)
        {
            case "ROCK":
                output = "You lose!";
                botWin++;
                bot.textContent = "Games bot won: " + botWin;
                result.textContent = "Result: You chose scissors, and the bot chose rock! You lose!";
                break;
            case "PAPER":
                output = "You win!";
                userWin++;
                user.textContent = "Games you've won: " + userWin;
                result.textContent = "Result: You chose scissors, and the bot chose paper! You win!";
                break;
            case "SCISSORS":
                output = "It's a tie!";
                tieCount++;
                tie.textContent = "Tie: " + tieCount;
                result.textContent = "Result: You chose scissors, and the bot chose scissors! It's a tie!";
                break;
        }
    } 
    return console.log(output);
}

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);



