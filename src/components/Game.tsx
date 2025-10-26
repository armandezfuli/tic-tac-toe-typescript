import Board from "./Board"
import { useGame } from "../context/GameContext"

const Game = () => {
    const { state, dispatch } = useGame()

    const jumpTo = (nextMove: number) => {
        dispatch({ type: "JUMP_TO", nextMove })
    }

    const moves = state.history.map((_, move) => {
        let description
        if (move > 0) {
            description = "Go to move #" + move
        } else {
            description = "Go to game start"
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game
