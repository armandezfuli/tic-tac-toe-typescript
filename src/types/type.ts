export type Player = "X" | "O"

export type SquareType = Player | null

export type BoardProps = {
    isXNext: boolean
    squares: SquareType[]
    onPlay: (nextSquares: SquareType[]) => void
}

export type SquareProps = {
    value: SquareType
    onSquareClick: () => void
}

export type GameState = {
    history: SquareType[][]
    currentMove: number
}

export type GameAction =
    | { type: "PLAY"; nextSquares: SquareType[] }
    | { type: "JUMP_TO"; nextMove: number }
