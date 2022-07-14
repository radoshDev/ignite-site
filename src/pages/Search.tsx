import { FC } from "react"
import { Games } from "../components/Games"
import { Container } from "../styles/common"

const Search: FC = () => {
	return (
		<Container>
			<h2 className="title">Searched Games</h2>
			<Games />
		</Container>
	)
}

export default Search
