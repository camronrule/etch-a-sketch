const GRID_SIZE_PX = 500; //dimensions of the sketchbox, 500x500
let gridSize; //number of boxes in each dimension, 1x1 to 64x64
let slider; 
let gridSizeShown;
let divColor = '#000000' //default - black
let rainbowMode = false;
let eraserMode = false;

//wait until page has loaded to set up listeners
document.addEventListener('DOMContentLoaded', init, false);

//called only on page load
//responsibilities:
//set gridSize to the number shown/the default (32x32)
//draw a grid with that size
//call main
function init(){

    //when clear button is selected, regenerate grid like new
    let clear = document.querySelector('#clearButton');
    clear.addEventListener('click', main);

    //when color input is selected, change the color the divs are filled with
    let color = document.querySelector('#colorpicker');
    console.log(color.value);
    color.addEventListener('input', (e) => {
        divColor = e.target.value;
    }, false);

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

            div.style.color = divColor;
            div.style.height = dimensions;
            div.style.width = dimensions;
            div.style.outline = '1px solid #e3e3e3';

            document.querySelector('.container.sketchboxes').appendChild(div);
        }
    }
}

function addDivListeners(){
    let divs = document.querySelectorAll('.container.sketchboxes > div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        if (rainbowMode){
            div.style.backgroundColor = randomColor();
        }
        else if (eraserMode) {
            div.style.backgroundColor = '#e5e9ec';
        }
        else {
            div.style.backgroundColor = divColor;
        }
    }))
}

//picks a random color for rainbow mode
function randomColor(){
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}


function toggleRainbow(){
    let rainbowbtn = document.querySelector('#rainbowbutton');
    if (rainbowMode){
        rainbowMode = false;
        divColor = '#000000';
        rainbowbtn.classList.remove('active');
    }
    else {
        if (eraserMode) { toggleEraser(); }
        rainbowMode = true;
        rainbowbtn.classList.add('active');
    }
}

function toggleEraser(){
    let eraserbtn = document.querySelector('#eraserbutton');
    if (eraserMode){
        eraserMode = false;
        eraserbtn.classList.remove('active');
    }
    else {
        if (rainbowMode) { toggleRainbow(); }
        eraserMode = true;
        eraserbtn.classList.add('active');
    }
}