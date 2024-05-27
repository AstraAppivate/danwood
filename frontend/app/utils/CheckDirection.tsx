type Player = 'R' | 'Y' | null;

const checkDirection = (
    board: Player[][],
    row: number,
    col: number,
    rowDir: number,
    colDir: number
  ): boolean => {
    const player = board[row][col]; // Get the player at the current position
    let count = 0; // Counter for consecutive pieces
  
    // Check 7 positions in the given direction (-3 to +3)
    for (let i = -3; i <= 3; i++) {
      const r = row + i * rowDir; // Calculate the row index
      const c = col + i * colDir; // Calculate the column index
  
      // Check if the calculated position is within the bounds of the board
      if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
        // Check if the position has the same player's piece
        if (board[r][c] === player) {
          count++; // Increment the counter
          if (count === 4) {
            // If we have found 4 consecutive pieces, return true
            return true;
          }
        } else {
          count = 0; // Reset the counter if the piece is different
        }
      } else {
        count = 0; // Reset the counter if out of bounds
      }
    }
  
    // Return false if no 4 consecutive pieces are found
    return false;
  };

  export { checkDirection }

  export type { Player }