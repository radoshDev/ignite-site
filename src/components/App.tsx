import { ReactElement } from "react"
import { Routes, Route } from "react-router-dom"
import api from "../api"
import Home from "../pages/Home"
import GlobalStyles from "../styles/GlobalStyles"

const App = (): ReactElement => {
	const { data, isLoading } = api.useGetGamesQuery("popular")
	console.log(data)

	return (
		<>
			<GlobalStyles />
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<h1>Search</h1>} />
					<Route path="/game/:id" element={<h1>Game</h1>} />
				</Routes>
			</div>
		</>
	)
}

export default App
