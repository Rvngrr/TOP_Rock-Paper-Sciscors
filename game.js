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
            console.log(0);
            return 1;
        }
        
        case "Paper":{
            console.log(1);
            return 2;
        }
        
        case "Scissors":{
            console.log(2);
            return 3;
        }

        default:
            alert("Invalid Character!!!")

    }
}

function playRound(computer,player){
    if(computer === player){
        console.log("Draw")
    }
    else if(computer === 'Rock' && player === 'Paper'){
        playerScore += 1;
        console.log("player Wins");
    }
    else if(computer === 'Paper' && player === 'Scissors'){
        playerScore += 1;
        console.log("player Wins");

    }
    else if(computer === 'Scissors' && player === 'Rock'){
        playerScore += 1;
        console.log("player Wins");

    }
    else{
        console.log("player Lost")
        computerScore += 1;
    }

    console.log("player     : ", playerScore);
    console.log("computer   : ", computerScore);

}

// function getWinner(){
//     if(playerScore === 5){
//         console.log('Congratulations You Win')
//         return false;
//     }
//     else if (computerScore === 5){
//         console.log("You Lost")
        
//         return false;

//     }
//     return true
// }

function getComputerChoice(){
    let charIndex = Math.floor(Math.random()*3);
    return choices[charIndex];
}


const button = document.querySelectorAll('button');
let playerChoice = "";

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        playerChoice = btn.textContent;
        console.log(getPlayerChoice(playerChoice));
        
    });
});



// do{
//     let playAgain = true;

//     do{
//         let computer = getComputerChoice();
//         let player = getPlayerChoice(playerChoice);

//         if(player === null){
//             continue;
//         }

//         console.log('player     : ', player);
//         console.log ('computer  : ', computer);
//         playRound(computer,player);
//         playAgain = getWinner();
//     }
//     while(playAgain);
//     ans = prompt('Do you want to retry: Y/N');
//     if(ans == null || (ans.toUpperCase() !== 'Y')){
//         retry = false;
//     }
//     else{
//         retry =  true;
//         playerScore = 0;
//         computerScore = 0;
//     }
// } while(retry);
    



