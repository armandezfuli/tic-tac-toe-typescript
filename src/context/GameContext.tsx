import React, { createContext, useContext, useReducer } from "react"
import type { GameState, GameAction } from "../types/type"

type GameContextValue = {
    state: GameState
    dispatch: React.Dispatch<GameAction>
}

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

const GameContext = createContext<GameContextValue | undefined>(undefined)

const initialState: GameState = {
    history: [Array(9).fill(null)],
    currentMove: 0,
}

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGame = () => {
    const context = useContext(GameContext)
    if (context === undefined) throw new Error("useGame most be use inside GameProvider")
    return context
}
