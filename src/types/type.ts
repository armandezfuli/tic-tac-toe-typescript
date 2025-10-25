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
