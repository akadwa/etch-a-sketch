// QUERY SELECTORS
const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const apply = document.querySelector('#applyButton');
const reset = document.querySelector('#resetButton');
const displaySize = document.querySelector('#displaySize');

// DEFAULT GRID SIZE
let gridSize = 16;

// ARRAY of HEX numbers and letters
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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
                let hexColor = "#";
                for (let i = 0; i < 6; i++) {
                    hexColor += getRandomHex();
                };
                column.style.backgroundColor = hexColor;
                // column.style.opacity = (parseFloat(column.style.opacity) || 0) + 0.25;
            })
        }  
    }
};

// FUNCTION to get a random color
function getRandomHex() {
    return hex[Math.floor(Math.random() * hex.length)];
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

// EVENT LISTENER for the slider input
//returns the new range in the displaySize div
slider.addEventListener('mouseup', () => {
    displaySize.innerHTML = ' ';
    displaySize.innerHTML = slider.value;
})

addCells();
