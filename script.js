// QUERY SELECTORS
const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');

// DEFAULT GRID SIZE
let gridSize = 16;



// FUNCTION to add cells to the grid
function addCells() {
    for (i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (n = 0; n < gridSize; n++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }  
    }
}

addCells();

