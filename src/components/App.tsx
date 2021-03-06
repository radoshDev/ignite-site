import { ReactElement } from "react"
import { Routes, Route } from "react-router-dom"
import GameDetails from "../pages/GameDetails"
import Home from "../pages/Home"
import GlobalStyles from "../styles/GlobalStyles"
import { Navigation } from "./Navigation"

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<div className="app">
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/game/:id" element={<GameDetails />} />
				</Routes>
			</div>
		</>
	)
}

export default App
