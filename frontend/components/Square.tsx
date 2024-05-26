type SquareProps = {
        value: string | null;
        onClick: () => void;
        highlight: boolean;
    };

export function Square({ value, onClick, highlight }: SquareProps) {
    const classname = highlight ? 'square-won' : 'square';
    return (
        <button className={classname} onClick={onClick} >
            {value}
        </button>
    );
}
  