// take in the current state of the board and return the winner if there is one
// and the line that won

// squares: the current state of the board
// returns: an object with the winner and the line that won

export function calculateWinner(squares: (string | null)[]): { winner: string | null, line: number[] | null } {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return { winner: null, line: null };
  }