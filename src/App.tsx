import Game from "./components/Game"
import { GameProvider } from "./context/GameContext"

const App = () => {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    )
}

export default App
