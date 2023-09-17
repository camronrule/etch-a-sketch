const GRID_SIZE_PX = 500;
let gridSize;
let slider;
let gridSizeShown;

//wait until page has loaded to set up listeners
document.addEventListener('DOMContentLoaded', init, false);

//called only on page load
//responsibilities:
//set gridSize to the number shown/the default (32x32)
//draw a grid with that size
//call main
function init(){
    slider = document.querySelector('#slider');
    gridSize = slider.value; //get default value for rangeSlider
    gridSizeShown = document.querySelector('.rangeSlider, .value');
    gridSizeShown.textContent = gridSize + 'x' + gridSize; //set display value for gridSize to be the default of the range slider
    slider.addEventListener('mouseup', main);
    main();
}

//called during mouseup event on slider
//create mouseup event listeners on slider
function main(){
    gridSize = slider.value;
    gridSizeShown.textContent = gridSize + ' x ' + gridSize;
    clearGrid();
    createNewGrid();
    addDivListeners();
}


function clearGrid(){
    let divs = document.querySelectorAll('.container.sketchboxes > div');
    divs.forEach(div => div.parentNode.removeChild(div));
}


//initially size of grid is 32x32 - range from 1 to 64
function createNewGrid() {
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