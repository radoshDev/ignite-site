import { FC } from "react"
import { Games } from "../components/Games"
import { Container } from "../styles/common"

const Home: FC = () => {
	return (
		<Container>
			<Games />
		</Container>
	)
}

export default Home
