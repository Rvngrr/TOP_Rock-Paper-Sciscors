const container = document.querySelector('.container')
const btns = document.createElement('div');
const hero = document.createElement('div');
const pChoice = document.createElement('p');
const pScore = document.createElement('p');
const compScore = document.createElement('p');
const compChoice = document.createElement('p');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');


rock.classList.add('Btn');
paper.classList.add('Btn');
scissors.classList.add('Btn');
pChoice.classList.add('text');
compChoice.classList.add('text');

pChoice.textContent = 'Player   : ';
compChoice.textContent = 'Computer : ';
rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

container.appendChild(hero);
container.appendChild(btns);
hero.appendChild(pChoice);
hero.appendChild(compChoice);
btns.appendChild(rock);
btns.appendChild(paper);
btns.appendChild(scissors);

btns.setAttribute('style', `
    display : flex;
    justify-content: center;
    align-items : space-around;
    width: 800px;
    `)

container.setAttribute('style',`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    `)