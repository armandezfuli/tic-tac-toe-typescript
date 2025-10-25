import type { SquareProps } from "../types/type"

const Square = ({ value, onSquareClick }: SquareProps) => {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square
