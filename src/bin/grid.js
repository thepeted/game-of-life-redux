export const makeGrid = (height, width, makeRandom = false) => {
  let grid = [];
    for (var i = 0; i < height; i++){
      var row = [];
      for (var j = 0; j < width; j++){
        let value;
        if (makeRandom){
          value = Math.random() > 0.8
        }
        row.push(value);
      }
      grid.push(row);
    }
    return grid;
}

export const advanceGrid = function(grid = []){
     let gridHeight = grid.length;
     let gridWidth = grid[0].length

     let calculateNeighbours = function(x,y) {
       let topRow = x-1 < 0 ? (gridHeight - 1) : x-1;
       let bottomRow = (x+1 === gridHeight) ? 0 : x+1;
       let leftColumn = y-1 < 0 ? (gridWidth - 1) : y-1;
       let rightColumn = (y+1 === gridWidth) ? 0 : y+1;

       let total = 0;
       total+= grid[topRow][leftColumn];
       total+= grid[topRow][y];
       total+= grid[topRow][rightColumn];
       total+= grid[x][leftColumn];
       total+= grid[x][rightColumn];
       total+= grid[bottomRow][leftColumn];
       total+= grid[bottomRow][y];
       total+= grid[bottomRow][rightColumn];

       return total;
     }

     let gameState = [];
     for (let i = 0; i < gridHeight; i++) {
       let row = [];
       for (let j = 0; j < gridWidth; j++) {
         let cellIsAlive = grid[i][j];
         let neighbours = calculateNeighbours(i,j);
           if (cellIsAlive) {
                if (neighbours < 2) {
                    row.push(0)
                } else if (neighbours > 3){
                    row.push(0);
                } else {
                    row.push(1);
                }
            }


            if (!cellIsAlive) {
                if (neighbours === 3) {
                row.push(true);
            } else {
                row.push(false);
                }
            }
     }
     gameState.push(row);
   }
   return gameState;
   }
