
import { Square } from './Square';
import { calculateWinner } from '../app/utils/CalculateWinner';
type BoardProps = {
    squares: (string | null)[];
    onClick: (i: number) => void;
    winningLine: number[] | null;
  };
  
  export function Board({ squares, onClick, winningLine }: BoardProps) {
    const renderSquare = (i: number) => (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        highlight={winningLine?.includes(i) ?? false}
      />
    );
  
    const winnerInfo = calculateWinner(squares);
    const status = winnerInfo.winner ? `The Warfighter Winner is: ${winnerInfo.winner}` : `Next Warfighter: ${squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'}`;
  
    return (
      <div>
        <div className='rounded-md p-4'>
          <div className="status text-center border p-6 border-black rounded-xxl">{status}</div>
          <div className="board-row">
            {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }