//Check win
const checkWin = ({ grid, color}) => {
    //chek vertical
    const isWinVer = checkVertical({ grid, color});
    //chek horizontal
    const isWinHor = checkHorizontal({ grid, color});
    //check diag tl to br
    const isWinDiagTLBR = checkDiagTLBR({ grid, color});
    //check diag tr to bl
    const isWinDiagTRBL = checkDiagTRBL({ grid, color});

    const isWin = isWinVer || isWinHor;
    return isWin;
};



const checkDiagTLBR = ({grid, color} = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++){
        for (let y = 0; y < grid.length; y++){
            if (color === (
                grid[y][x] &&
                grid[y - 1][x - 1] &&
                grid[y - 2][x - 2] &&
                grid[y - 3][x - 3]
                )){
                // console.log('win');
                return true;
            }
        }
    }
    return false;
};



const checkDiagTRBL = ({grid, color} = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++){
        for (let y = 0; y < grid.length; y++){
            if (color === (grid[y][x] && grid[y][x + 1] &&  grid[y][x + 2] && grid[y][x + 3])){
                // console.log('win');
                return true;
            }
        }
    }
    return false;
};

const checkHorizontal = ({grid, color} = {}) => {
    for (let x = 0; x < grid[0].length - 3; x++){
        for (let y = 0; y < grid.length; y++){
            if (grid[y][x] === color &&
                grid[y][x + 1] === color &&
                grid[y][x + 2] === color &&
                grid[y][x + 3] === color){
            // if (color === (grid[y][x] && grid[y][x + 1] &&  grid[y][x + 2] && grid[y][x + 3])){
                // console.log('win');
                return true;
            }
        }
    }
    return false;
};



const checkVertical = ({ grid, color } = {}) => {
    for (let x = 0; x < grid[0].length; x++){
        for (let y = 0; y < grid.length - 3; y++){

            if (grid[y][x] === color &&
                grid[y + 1][x] === color &&
                grid[y + 2][x] === color &&
                grid[y + 3][x] === color){
            // if(
            //     color === (grid[y][x] && grid[y +1 ][x] &&  grid[y + 2][x] && grid[y + 3][x])
            //     ){
            // console.log('win');
            return true;
            }

        }
        // console.log('--- end y');
    }
    // console.log('--- end x');
    return false;
};