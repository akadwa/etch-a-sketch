// QUERY SELECTORS
const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const apply = document.querySelector('#applyButton');
const reset = document.querySelector('#resetButton');

// DEFAULT GRID SIZE
let gridSize = 16;

// FUNCTION to add cells to the grid as well as EVENT LISTENER to change background color on mouseover
function addCells() {
    for (i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (n = 0; n < gridSize; n++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
            // EVENT LISTENER for mouseover on individual cells
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = "black";
                column.style.opacity = (parseFloat(column.style.opacity) || 0) + 0.25;
            })
        }  
    }
};

// EVENT LISTENER for click on apply button
apply.addEventListener('click', () => {
    // FUNCTION to apply the selected value from the slider to the grid size and adjust it accordingly 
    grid.innerHTML = " ";
    gridSize = slider.value;
    addCells();
});

// EVENT LISTENER for click on reset button
reset.addEventListener('click', () => {
    grid.innerHTML = " ";
    addCells();
})

addCells();
