type Colour = 'R' | 'Y' | null;

const checkDirection = (
    board: Colour[][],
    row: number,
    col: number,
    rowDir: number,
    colDir: number
  ): boolean => {
    const colour = board[row][col]; // Get the colour at the current position
    let count = 0; 
  
    // Check 7 positions in the given direction (-3 to +3)
    for (let i = -3; i <= 3; i++) {
      const r = row + i * rowDir; // Calculate the row index
      const c = col + i * colDir; // Calculate the column index
      console.log('r', r, 'c', c)
      // Check if the calculated position is within the bounds of the board
      if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
        // ha the position got the same colours piece
        if (board[r][c] === colour) {
          console.log('board', board)
          console.log('r', r)
          console.log('c', c)
          console.log('board[r][c]', board[r][c])

          count++; // Increment the counter
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