let board = document.querySelector('.board');
let message = document.querySelector('#message');
let selectBtn = document.querySelector(".select-btn");
let blackBtn = document.querySelector(".black-btn");
let rainbowBtn = document.querySelector(".rainbow-btn");


function gridBoard(boardSize) {

    if(typeof(boardSize) !== 'number' || boardSize < 0 || boardSize > 100){
        alert("Please enter a grid number between 0 and 100");
    } else {
        alert("nice");
    }

    
    
        board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

   for(let i = 0;i < boardSize * boardSize; i++) {
         const cell = document.createElement('div');
         cell.style.backgroundColor = 'white';
         board.appendChild(cell);
        }
        

       
}  function cellHover(color) {
    board.addEventListener('mouseover', (event) => {
       if(color == 'black') {
        event.target.style.backgroundColor = "black";
       } else if(color == 'rainbow') {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
       }
    })   
}

blackBtn.addEventListener('click', () => {
    cellHover('black');
})

rainbowBtn.addEventListener('click', () => {
    cellHover('rainbow');
})


 

function clearBoard() {
    board.innerHTML="";
    clearBoard();
}


selectBtn.addEventListener('click', () => {
    let size = parseInt(prompt("Please enter a grid size: "));
    if(typeof(size) == 'number') {
       gridBoard(parseInt(size));
    }
} );


