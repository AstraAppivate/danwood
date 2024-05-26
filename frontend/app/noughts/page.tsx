'use client';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Login } from '../../components/login';
import { Board } from '../../components/Board';
import { calculateWinner } from '../../components/CalculateWinner';

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]); // starts 9 empty squares
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handleClick = (i: number) => {
    if (calculateWinner(currentSquares).winner || currentSquares[i]) return;
    const nextSquares = currentSquares.slice();
    nextSquares[i] = currentSquares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move: number) => setCurrentMove(move);

  const moves = history.map((_, move) => {
    const description = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const winnerInfo = calculateWinner(currentSquares);

  return (
    <div className="game">
      <Header />
      <div className="game-board">
        <Board squares={currentSquares} onClick={handleClick} winningLine={winnerInfo.line} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <Login />
    </div>
  );
}

