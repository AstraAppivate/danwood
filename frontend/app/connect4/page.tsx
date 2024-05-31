'use client'
import React, { useState } from 'react';
import { Colour } from '../utils/CheckDirection';
import { checkDirection } from '../utils/CheckDirection';

const Cell: React.FC<{ col:any, cell: Colour | null; onClick: () => void }> = ({ col,cell, onClick }) => (
  <div className="cell" onClick={onClick}>
    {cell && <div className={`piece ${cell === 'R' ? 'R' : 'Y'}`}><div className='text-white'>{cell}{col}</div></div>}
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
    // console.log('newBoard', newBoard)
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

  /*
  [
    [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6],
    [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6],
    [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6],
    [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6],
    [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6],
    [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6]
  ]
*/
  const checkWin = (board: Colour[][], row: number, col: number): boolean => {
    return checkDirection(board, row, col, 1, 0) || // -
           checkDirection(board, row, col, 0, 1) || // |
           checkDirection(board, row, col, 1, 1) || // /
           checkDirection(board, row, col, 1, -1);  // \
  };
  

  return (
    <div className="flex flex-col items-center font-mono text-neon-green min-h-screen">
      <h1 className="text-4xl mb-5 p-5 text-red-500 rounded-xl underline">Connect 4 - Warfighter</h1>
      {winner && <h2 className="text-3xl p-5 mb-1 text-red-600 rounded-xl">{winner} wins!</h2>}
      <div className="connect_4_board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell key={colIndex} col={colIndex} cell={cell} onClick={() => handleClick(colIndex)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect4;

