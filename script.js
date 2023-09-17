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
        createGrid(gridSize);
    });
}

//initially size of grid is 32x32 - range from 1 to 64
function createGrid(gridSize) {
    
    console.log(gridSize);
}

