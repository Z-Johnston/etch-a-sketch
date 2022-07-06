const resetGame = document.querySelector('.reset');
const selectGridCount = document.querySelector('.select-grid-count')
const gridContainer = document.querySelector('.grid-container');
const gridButtons = document.querySelectorAll('.grid-buttons');
let gridSize = '';
const grid = document.createElement('grid');

grid.classList.add('grid');

//Click event listener for each grid sized button
gridButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let gridSize = parseInt(button.textContent);
        let grids = document.querySelectorAll('.grid');
        removeGrids(grids);
        setGridStyle(gridSize);
        addGrids(gridSize);
        grids = document.querySelectorAll('.grid');
        addGridColorChange(grids);
    })
});

//function that removes all grids
function removeGrids(grids) {
    grids.forEach(grid => {
        grid.remove();
    });
}

//function that changes the styles of the grids
function setGridStyle(gridSize) {
    grid.style.width = `${(512 / (gridSize)) - 2}px`;
    grid.style.height = `${(512 / (gridSize)) - 2}px`;
}

//function that sets the grid size - runs as part of the button click event
function addGrids(gridSize) {
    let i=0;
    while (i < (gridSize ** 2)) {
        gridContainer.appendChild(grid.cloneNode(true));
        i++;
    }   
}

//function that adds color change capability to each grid 
function addGridColorChange(grids) {
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'black';
        });
    });
}