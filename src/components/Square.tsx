import type { SquareProps } from "../types/type"

function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square
