import React, { useState } from 'react';
import './Connect4.css'; // Assuming you have some basic styles

type Player = 'R' | 'Y' | null;

const Connect4: React.FC = () => {
  const rows = 6;
  const cols = 7;
  const [board, setBoard] = useState<Player[][]>(Array.from({ length: rows }, () => Array(cols).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('R');
  const [winner, setWinner] = useState<Player | null>(null);

  const handleClick = (col: number) => {
    if (winner || board[0][col] !== null) return; // No more moves if game is won or column is full

    const newBoard = board.map(row => row.slice());
    for (let row = rows - 1; row >= 0; row--) {
      if (newBoard[row][col] === null) {
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        if (checkWin(newBoard, row, col)) {
          setWinner(currentPlayer);
        } else {
          setCurrentPlayer(currentPlayer === 'R' ? 'Y' : 'R');
        }
        break;
      }
    }
  };

  const checkWin = (board: Player[][], row: number, col: number): boolean => {
    return checkDirection(board, row, col, 1, 0) || // Horizontal
           checkDirection(board, row, col, 0, 1) || // Vertical
           checkDirection(board, row, col, 1, 1) || // Diagonal /
           checkDirection(board, row, col, 1, -1);  // Diagonal \
  };

  const checkDirection = (board: Player[][], row: number, col: number, rowDir: number, colDir: number): boolean => {
    const player = board[row][col];
    let count = 0;

    for (let i = -3; i <= 3; i++) {
      const r = row + i * rowDir;
      const c = col + i * colDir;
      if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === player) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
    return false;
  };

  return (
    <div>
      <h1>Connect 4</h1>
      {winner && <h2>Player {winner} wins!</h2>}
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="cell" onClick={() => handleClick(colIndex)}>
                {cell && <div className={`piece ${cell}`}></div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect4;
