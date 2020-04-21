const buttons = document.querySelectorAll('button');
const playerTable = document.getElementById('playerScore');
const computerTable = document.getElementById('computerScore');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
})

function playRound(e) {
    let computerSelection = makeSelection()
    let win = `You win! ${e.target.id} beats ${computerSelection}`
    let lose = `You lose! ${computerSelection} beats ${e.target.id}`
    let draw = `Draw! You both chose ${e.target.id}`
    if (e.target.id == 'rock') {
            switch(computerSelection) {
                case 'rock': printResult(draw);
                break;
                case 'paper': printResult(lose);
                computerScore++;
                computerTable.innerText = `${computerScore}`;
                break;
                case 'scissors': printResult(win);
                playerScore++;
                playerTable.innerText = `${playerScore}`;
                break;
            }
    } else if (e.target.id == 'paper') {
             switch(computerSelection) {
                case 'rock': printResult(win);
                playerScore++;
                playerTable.innerText = `${playerScore}`;
                break;
                case 'paper': printResult(draw);
                break;
                case 'scissors': printResult(lose);
                computerScore++;
                computerTable.innerText = `${computerScore}`;
                break;
            }
    }
    else {
             switch(computerSelection) {
                case 'rock': printResult(lose);
                computerScore++;
                computerTable.innerText = `${computerScore}`;
                break;
                case 'paper': printResult(win);
                playerScore++;
                playerTable.innerText = `${playerScore}`;
                break;
                case 'scissors': printResult(draw);
                break;
            }
    }
    checkWinner()
}

function makeSelection() {
    let selected = Math.floor(Math.random() * Math.floor(3)+1);
    switch(selected) {
        case 1:
            selected = 'rock'
            break;
        case 2:
            selected = 'paper'
            break;
        case 3:
            selected = 'scissors'
            break;
    }
    return selected;
}

function checkWinner() {
    if (playerScore == 5) {
        alert("You Win")
        resetGame()
    } else if (computerScore == 5) {
        alert("You Lose, Computer reached 5 first")
        resetGame()
    }
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    computerTable.innerText = `${computerScore}`;
    playerTable.innerText = `${playerScore}`;
    const elements = document.querySelectorAll('.printedResults')
    elements.forEach((element) => {
        element.parentNode.removeChild(element)
    })
}

function printResult(result) {
    const main = document.querySelector('.main');
    const content = document.createElement('p');
    content.classList.add('printedResults')
    content.innerHTML = result
    main.appendChild(content);
}

