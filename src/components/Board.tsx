import { useGame } from "../context/GameContext"
import Square from "./Square"
import calculateWinner from "../utils/calculateWinner"

const Board = () => {
    const { state, dispatch } = useGame()

    const squares = state.history[state.currentMove]
    const isXNext = state.currentMove % 2 === 0

    const winner = calculateWinner(squares)

    const handleClick = (i: number) => {
        if (squares[i] || winner) return

        const nextSquares = squares.slice()
        nextSquares[i] = isXNext ? "X" : "O"

        dispatch({ type: "PLAY", nextSquares })
    }

    let status
    if (winner) {
        status = "Winner: " + winner
    } else {
        status = "Next player: " + (isXNext ? "X" : "O")
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

export default Board
