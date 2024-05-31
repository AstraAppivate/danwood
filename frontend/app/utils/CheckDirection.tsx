type Colour = 'R' | 'Y' | null;

const checkDirection = (
    board: Colour[][],
    row: number,
    col: number,
    rowDir: number,
    colDir: number
  ): boolean => {
    const colour = board[row][col]; // Get the colour at the current position
    console.log('now checking directions and going in direction ( rowDir, colDir )', rowDir, colDir)
    console.log('we are checking for the colour', board[row][col] , 'because our current (position is', row, col, 'in the board')
    let count = 0; 
    console.log("check direction function")
  
    // 7 positions in the given direction (-3 to +3)
    for (let i = -3; i <= 3; i++) {
      // starts at -3, ends at 3, increments by 1 through the board in the given direction ( rowDir, colDir)
      const r = row + i * rowDir; // Calculate the row index
      const c = col + i * colDir; // Calculate the column index
      
      console.log('we are now checking the position', r, c, 'in the board')
      // is calculated position within the bounds of the board
      if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
        // hsa the position got the same colours piece?
        if (board[r][c] === colour) {
          
          console.log('board[r][c]', board[r][c])

          count++; // adds colour count if match
          if (count === 4) {
            
            return true;
          }
        } else {
          count = 0;
        }
      } else {
        count = 0; 
      }
    }
  
    // false if no 4 consecutive pieces are found
    return false;
  };

  export { checkDirection }

  export type { Colour }