export const makeGrid = (height, width, makeRandom = false) => {
  let grid = [];
    for (var i = 0; i < height; i++){
      var row = [];
      for (var j = 0; j < width; j++){
        let value;
        if (makeRandom){
          value = Math.random() > 0.85;
        }
        row.push({
          status: value,
          newBorn: value
        });
      }
      grid.push(row);
    }
    return grid;
};

export const advanceGrid = function(grid = []){
     let gridHeight = grid.length;
     let gridWidth = grid[0].length;

     let calculateNeighbours = function(x,y) {
       //since the world is toroidal: if the cell is at the edge of the grid we
       //will reference the cell on the opposite edge
       let topRow = x-1 < 0 ? (gridHeight - 1) : x-1;
       let bottomRow = (x+1 === gridHeight) ? 0 : x+1;
       let leftColumn = y-1 < 0 ? (gridWidth - 1) : y-1;
       let rightColumn = (y+1 === gridWidth) ? 0 : y+1;

       let total = 0;
       total+= grid[topRow][leftColumn].status;
       total+= grid[topRow][y].status;
       total+= grid[topRow][rightColumn].status;
       total+= grid[x][leftColumn].status;
       total+= grid[x][rightColumn].status;
       total+= grid[bottomRow][leftColumn].status;
       total+= grid[bottomRow][y].status;
       total+= grid[bottomRow][rightColumn].status;

       return total;
     };
     //apply the rules of the game by comparing with the existing grid to build
     //a new array
     let gameState = [];
     for (let i = 0; i < gridHeight; i++) {
       let row = [];
       for (let j = 0; j < gridWidth; j++) {
         let cellIsAlive = grid[i][j].status;
         let neighbours = calculateNeighbours(i,j);
           if (cellIsAlive) {
                if (neighbours < 2) {
                    row.push({ status: 0 });
                } else if (neighbours > 3){
                    row.push({ status: 0 });
                } else {
                    row.push({ status: 1 });
                }
            }
            if (!cellIsAlive) {
                if (neighbours === 3) {
                row.push({
                  status: 1,
                  newBorn: true
                });
            } else {
                row.push({ status: 0 });
                }
            }
     }
     gameState.push(row);
   }
   return gameState;
 };
