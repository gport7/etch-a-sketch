let gridSize = 25;
let grid = document.querySelector('.container__column');
let holding = false;

// let's you unclick the mouse anywhere on the page to turn off holding
document.addEventListener('mouseup', () => holding = false);

function makeGrid (size) {
    grid.setAttribute('draggable', false);
    for (let i = 1; i <= size; i++) {
        const column = document.createElement('div');
        column.draggable = false;
        column.ondragstart = false;
        column.classList.add('column__pixel');
        grid.appendChild(column);
        for (let j = 1; j <= size; j++) {
            const pixel = document.createElement('div');
            pixel.draggable = false;
            pixel.ondragstart = false;
            pixel.classList.add('pixel', 'bg-secondary');
            pixel.addEventListener('mousedown', () => holding = true);            
            pixel.addEventListener('mousemove', (e) => paintPixel(e));
            column.appendChild(pixel);
        }
    }    
}

function paintPixel(e) {
    const square = e.target;
    if (holding) {
        square.classList.add('painted');
    }
}

makeGrid (gridSize);