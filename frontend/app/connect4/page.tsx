'use client'
import React, { useState } from 'react';
import { Colour } from '../utils/CheckDirection';
import { checkDirection } from '../utils/CheckDirection';

const Cell: React.FC<{ cell: Colour | null; onClick: () => void }> = ({ cell, onClick }) => (
  <div className="cell" onClick={onClick}>
    {cell && <div className={`piece ${cell === 'R' ? 'R' : 'Y'}`}></div>}
  </div>
);
const Connect4: React.FC = () => {
  const rows = 6;
  const cols = 7;
  
  const [board, setBoard] = useState<Colour[][]>(Array.from({ length: rows }, () => Array(cols).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState<Colour>('R');
  const [winner, setWinner] = useState<Colour | null>(null);
  
  const isColumnFull = (col: number) => board[0][col] !== null;
  
  const cloneBoard = (board: Colour[][]) => board.map(row => row.slice());
  
  const getAvailableRow = (board: Colour[][], col: number) => {
    for (let row = rows - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        return row;
      }
    }
    return -1; // col is full
  };

  const handleClick = (col: number) => {
    if (winner || isColumnFull(col)) return; // returns if there is a winner or the column is full
  
    const newBoard = cloneBoard(board);
    const row = getAvailableRow(newBoard, col);
    if (row === -1) return;
  
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
  
    if (checkWin(newBoard, row, col)) {
      setWinner(currentPlayer);
    } else {
      togglePlayer();
    }
  };
  
  const togglePlayer = () => setCurrentPlayer(currentPlayer === 'R' ? 'Y' : 'R');

  const checkWin = (board: Colour[][], row: number, col: number): boolean => {
    return checkDirection(board, row, col, 1, 0) || // -
           checkDirection(board, row, col, 0, 1) || // |
           checkDirection(board, row, col, 1, 1) || // /
           checkDirection(board, row, col, 1, -1);  // \
  };

  return (
    <div className="flex flex-col items-center font-mono text-neon-green min-h-screen">
      <h1 className="text-4xl mb-5 p-5 text-red-500 rounded-xl underline">Connect 4 - Warfighter</h1>
      {winner && <h2 className="text-3xl mb-5 text-neon-yellow neon-glow">Player {winner} wins!</h2>}
      <div className="connect_4_board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell key={colIndex} cell={cell} onClick={() => handleClick(colIndex)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect4;

