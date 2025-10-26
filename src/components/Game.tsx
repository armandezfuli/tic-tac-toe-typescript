import { useReducer } from "react"
import type { GameAction, GameState, SquareType } from "../types/type"
import Board from "./Board"

const gameReducer = (state: GameState, action: GameAction): GameState => {
    switch (action.type) {
        case "PLAY": {
            const nextHistory = [
                ...state.history.slice(0, state.currentMove + 1),
                action.nextSquares,
            ]
            return {
                history: nextHistory,
                currentMove: nextHistory.length - 1,
            }
        }
        case "JUMP_TO": {
            return {
                ...state,
                currentMove: action.nextMove,
            }
        }
        default:
            return state
    }
}

const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, {
        history: [Array(9).fill(null)],
        currentMove: 0,
    })

    const isXNext = state.currentMove % 2 === 0
    const currentSquares = state.history[state.currentMove]

    const handlePlay = (nextSquares: SquareType[]) => {
        dispatch({ type: "PLAY", nextSquares })
    }

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
                <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game
