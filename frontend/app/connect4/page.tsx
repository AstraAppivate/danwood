'use client'
import React, { useState } from 'react';
import { Player } from '../utils/CheckDirection';
import { checkDirection } from '../utils/CheckDirection';

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

  

  return (
    <div className="flex flex-col items-center font-mono text-neon-green min-h-screen">
      <h1 className="text-4xl mb-5 p-5 text-red-500 rounded-xl underline">Connect 4 - Warfighter</h1>
      {winner && <h2 className="text-3xl mb-5 text-neon-yellow neon-glow">Player {winner} wins!</h2>}
      <div className="connect_4_board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="cell" onClick={() => handleClick(colIndex)}>
                {cell && <div className={`piece ${cell === 'R' ? 'R' : 'Y'}`}></div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Connect4;
