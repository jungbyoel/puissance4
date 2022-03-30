const onkeyup = ({ keyCode })=> {
    if(isPlaying === false && keyCode === 32){
        grid = [...difaultGrid];
        drawBoard();
        // displayGrid();
    }
    if (keyCode >= 49 && keyCode <= 55) {
        const colIndex = keyCode - 49;
        putTokenInGrid({colIndex, color: currentColor})
    const isWin = checkWin({ grid, color: currentColor});
    if(isWin){
        isPlaying = false;
        drawWinner();
    }else{
        toggleColor();

    }
displayGrid();
    }

};