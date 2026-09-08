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