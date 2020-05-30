// DOM elements :
const cells = document.querySelectorAll('.cell');
const  resetButton = document.querySelector('button');
const headSection = document.querySelector('.end-game');
const declaration = document.querySelector('.declaration');

// Variables :
const X = "×";
const O = "○";
let playerTurn = 0; 
let isGameOver = false; 

// FUNCTIONS :
const putAMark = (event) => {

    if(isGameOver) {
        return;
    }

    if(!event.target.textContent) {
        if(playerTurn === 0) {
            event.target.textContent = X;
            event.target.classList.add('x');
            playerTurn = 1;
            declaration.textContent = "C'est au tour de " + O;
        } else {
            event.target.textContent = O;
            event.target.classList.add('o');
            playerTurn = 0;
            declaration.textContent = "C'est au tour de " + X;
        }
    } 
}

const isThereAWinner = () => {
    const cell0 = cells[0].classList[2];
    const cell1 = cells[1].classList[2];
    const cell2 = cells[2].classList[2];
    const cell3 = cells[3].classList[2];
    const cell4 = cells[4].classList[2];
    const cell5 = cells[5].classList[2];
    const cell6 = cells[6].classList[2];
    const cell7 = cells[7].classList[2];
    const cell8 = cells[8].classList[2];

    // All victory's possibilities : 
    if(cell0 && cell0 === cell1 && cell0 === cell2) {
        const winner = cells[0].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[0].classList.add('winner-cells');
        cells[1].classList.add('winner-cells');
        cells[2].classList.add('winner-cells');
    }

    if(cell0 && cell0 === cell3 && cell0 === cell6) {
        const winner = cells[0].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[0].classList.add('winner-cells');
        cells[3].classList.add('winner-cells');
        cells[6].classList.add('winner-cells');
    }

    if(cell0 && cell0 === cell4 && cell0 === cell8) {
        const winner = cells[0].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[0].classList.add('winner-cells');
        cells[4].classList.add('winner-cells');
        cells[8].classList.add('winner-cells');
    }

    if(cell1 && cell1 === cell4 && cell1 === cell7) {
        const winner = cells[1].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[1].classList.add('winner-cells');
        cells[4].classList.add('winner-cells');
        cells[7].classList.add('winner-cells');
    }

    if(cell2 && cell2 === cell5 && cell2 === cell8) {
        const winner = cells[2].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[2].classList.add('winner-cells');
        cells[5].classList.add('winner-cells');
        cells[8].classList.add('winner-cells');
    }

    if(cell3 && cell3 === cell4 && cell3 === cell5) {
        const winner = cells[3].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[3].classList.add('winner-cells');
        cells[4].classList.add('winner-cells');
        cells[5].classList.add('winner-cells');
    }

    if(cell6 && cell6 === cell7 && cell6 === cell8) {
        const winner = cells[6].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[6].classList.add('winner-cells');
        cells[7].classList.add('winner-cells');
        cells[8].classList.add('winner-cells');
    }

    if(cell2 && cell2 === cell4 && cell2 === cell6) {
        const winner = cells[2].textContent;
        declaration.textContent = winner + " a gagné la partie !";
        isGameOver = true;
        cells[2].classList.add('winner-cells');
        cells[4].classList.add('winner-cells');
        cells[6].classList.add('winner-cells');
    }

    // Verify if there is a double victory :
    let count = 0;

    for(let i = 0; i < cells.length; i++) {
        if(cells[i].classList.contains('winner-cells')) {
            count = count + 1;
            var winner = cells[i].textContent
        }

        if(count > 3) {
            declaration.textContent = "Wow ! Double victoire pour " + winner;
        }
    }
    
    // If there is no winner : 
    if(cell0 && cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8) {
        for(const cell of cells) {
            if(cell.classList.contains('winner-cells')) {
                return;
            } else {
                declaration.textContent = "Match nul !";
                isGameOver = true;      
            }
        }
    }
}

const resetGame = () => {
    for(const cell of cells) {
        cell.classList.remove('x', 'o', 'winner-cells');
        cell.textContent = '';
    }
    declaration.textContent = "C'est au tour de " + X;
    isGameOver = false;
    playerTurn = 0;
}

// Events : 
for(const cell of cells) {
    cell.addEventListener('click', putAMark);
    cell.addEventListener('click', isThereAWinner);
}

resetButton.addEventListener('click', resetGame);

