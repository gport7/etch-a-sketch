let gridSize = prompt("Grid Size?");
let grid = document.querySelector('.container__column');

function makeGrid (size) {
    console.log(size);
    for (let i = 1; i <= size; i++) {
        const column = document.createElement('div');
        column.classList.add('column__pixel');
        grid.appendChild(column);
        for (let j = 1; j <= size; j++) {
            const div = document.createElement('div');
            div.classList.add('pixel', 'bg-secondary');
            column.appendChild(div);
        }
    }    
}

makeGrid (gridSize);