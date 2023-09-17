const GRID_SIZE_PX = 500;

//wait until page has loaded to set up listeners
document.addEventListener('DOMContentLoaded', init, false);

//add listeners for:
//gridSize slider => create grid using gridSize => listeners for grid
//erase button
function init(){
    let slider = document.querySelector('#slider'); //gridSize slider
    slider.addEventListener('mouseup', function() {
        let gridSize = this.value;
        let gridSizeShown = document.querySelector('.rangeSlider, .value');
        gridSizeShown.textContent = gridSize + ' x ' + gridSize;
        clearGrid();
        createNewGrid(gridSize);
        addDivListeners();
    });
}

function clearGrid(){
    let divs = document.querySelectorAll('.container.sketchboxes > div');
    divs.forEach(div => div.parentNode.removeChild(div));
}


//initially size of grid is 32x32 - range from 1 to 64
function createNewGrid(gridSize) {
    let dimensions = (GRID_SIZE_PX/gridSize).toString() + 'px';

    for (let i = 0; i < gridSize; i++){
        for (let j=0; j< gridSize; j++){
            let div = document.createElement('div');

            div.style.height = dimensions;
            div.style.width = dimensions;
            div.style.outline = '1px solid #e3e3e3';

            document.querySelector('.container.sketchboxes').appendChild(div);
        }
    }

    console.log(gridSize);

}

function addDivListeners(){
    let divs = document.querySelectorAll('.container.sketchboxes > div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    }))
}