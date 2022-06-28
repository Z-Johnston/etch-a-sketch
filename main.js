const resetGame = document.querySelector('.reset');
const selectGridCount = document.querySelector('.select-grid-count')
const gridContainer = document.querySelector('.grid-container');
const gridButtons = document.querySelectorAll('.grid-buttons');
const grid = document.querySelector('.grid');
let grids = document.querySelectorAll('.grid');
let gridSize = 16;

//Event listener to load 16 grids upon page loading
window.addEventListener('load', function() {
    setGridSize(gridSize);
});

//Click event listener for each grid size button
gridButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let gridSize = parseInt(button.textContent)
        updateGrids();
        setGridStyle(gridSize);
        setGridSize(gridSize);
    })
});

//function that removes all grids
function updateGrids() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.remove();
    });
}

//function that changes the styles of the gridButtons
// function setGridButtonStyle(gridSize) {
    
// }

//function that changes the styles of the grids
function setGridStyle(gridSize) {
    grid.style.width = `${(512 / (gridSize)) - 2}px`;
    grid.style.height = `${(512 / (gridSize)) - 2}px`;
}

//function that sets the grid size - runs as part of the button click event
function setGridSize(gridSize) {
    let i=0;
    while (i < (gridSize ** 2) - 1) {
        gridContainer.appendChild(grid.cloneNode(true));
        i++;
    }   
}
