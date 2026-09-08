const container = document.querySelector('.container')
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.classList.add('Btn');
paper.classList.add('Btn');
scissors.classList.add('Btn');

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

container.setAttribute('style',`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    `)

// =============================================================================================================================

const choices = ['Rock', 'Paper', 'Scissors'];
let retry;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(Choice){
    
   switch (Choice){
        case "Rock":{
            return 'Rock';
        }
        
        case "Paper":{
            return 'Paper';
        }
        
        case "Scissors":{
            return "Scissors";
        }

        default:
            alert("Invalid Character!!!");
        

    }
}

function playRound(computer,player){
    let result = '';
    if(computer === player){
        result = 'Draw';
    }
    else if(computer === 'Rock' && player === 'Paper'){
        playerScore += 1;
        result = 'Player Wins';
    }
    else if(computer === 'Paper' && player === 'Scissors'){
        playerScore += 1;
        result = 'Player Wins';
    }
    else if(computer === 'Scissors' && player === 'Rock'){
        playerScore += 1;
        result = 'Player Wins';
    }
    else{
        computerScore += 1;
        result = 'Player Lost'
    }

    console.log("player     : ", playerScore);
    console.log("computer   : ", computerScore);
    console.log("Result     : ", result)
}

function getWinner(computerScore,playerScore){
    if(playerScore === 5){
        console.log('Congratulations You Win');

    }
    else if (computerScore === 5){
        console.log("You Lost, Try Again!");
    }
}

function getComputerChoice(){
    let charIndex = Math.floor(Math.random()*3);
    return choices[charIndex];
}

//===========================================================================================================================================

const button = document.querySelectorAll('button');
let playerChoice = "";

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        playerChoice = btn.textContent;
        
        let computer = getComputerChoice();
        let player = getPlayerChoice(playerChoice);
        
        console.log('player     : ', player);
        console.log ('computer  : ', computer);

        playRound(computer, player);
        getWinner(computerScore,playerScore);
    });
});