//Put token in grid
const putTokenInGrid = ({colIndex, color }) => {
    for (let i = grid.length - 1; i >= 0; i--){
        if (grid [i][colIndex] === null){
            grid[i][colIndex] = color;
            break;
        }
    }

    };