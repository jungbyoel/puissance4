//Difine HTML els

//Set player & color
let canvasEl = null;
let ctx = null;
let currentColor = "R";
let isPlaying = true;
const difaultGrid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
];

let grid = [...difaultGrid];

//Change color every round
const toggleColor = () => {
    currentColor = currentColor === 'R' ? 'Y' : 'R';
};



// add ia

const init = () => {
    attachFromDom();
    addEventListener();


    drawBoard();
    displayGrid();
    checkWin({grid, color: "R"});
    // ctx.translate(50, 50);
};

const attachFromDom = () => {
    canvasEl = document.querySelector("#canvas");
    ctx = canvasEl.getContext("2d");
};

const addEventListener = () => {
//Add event listeners
//Get input from keyboard to play
//<el>.addEventListener(<eventName: String>, Callback:Function(event));
document.addEventListener("keyup", onkeyup);

};

window.addEventListener("load", init);