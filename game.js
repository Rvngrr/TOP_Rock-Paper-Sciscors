const choices = ['Rock', 'Paper', 'Scissors'];
let retry;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(){
    let answer = prompt(
        'Pick a character: 1. Rock, 2. Paper, 3. Scissors'
    );

    let index = Number(answer)-1;
    
    if (index >= 0 && index < choices.length){
        return choices[index]
    }

    alert('Invalid Choice!')
    return null
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

function getWinner(){
    if(playerScore === 5){
        console.log('Congratulations You Win')
        return false;
    }
    else if (computerScore === 5){
        console.log("You Lost")
        
        return false;

    }
    return true
}

    function getComputerChoice(){
    let charIndex = Math.floor(Math.random()*3);
    return choices[charIndex];
}


do{
    let playAgain = true;

    do{
        let computer = getComputerChoice();
        let player = getPlayerChoice();

        if(player === null){
            continue;
        }

        console.log('player     : ', player);
        console.log ('computer  : ', computer);
        playRound(computer,player);
        playAgain = getWinner();
    }
    while(playAgain);
    ans = prompt('Do you want to retry: Y/N');
    if(ans == null || (ans.toUpperCase() !== 'Y')){
        retry = false;
    }
    else{
        retry =  true;
        playerScore = 0;
        computerScore = 0;
    }
} while(retry);





