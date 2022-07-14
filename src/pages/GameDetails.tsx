import { FC, ReactElement } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components/macro"
import api from "../api"
import { useGetGameDetailsQuery } from "../app/slices/gameSlice"
import DetailsContent from "../components/GameDetails/DetailsContent"
import { Container } from "../styles/common"

const S = {
	GameDetails: styled.div`
		padding: 2rem 0;
		margin: 0 auto;
		@media (min-width: 1200px) {
			max-width: 80%;
		}
	`,
	Media: styled.div`
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	`,
}

const GameDetails: FC = () => {
	const { id } = useParams()
	const { data: game, isLoading, isError } = useGetGameDetailsQuery(Number(id))

	let content: ReactElement
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isError) {
		content = <p style={{ color: "red" }}>Problem to load game details</p>
	} else if (!game) {
		content = <p>This game not found</p>
	} else {
		content = <DetailsContent game={game} />
	}
	return (
		<S.GameDetails>
			<Container>{content}</Container>
		</S.GameDetails>
	)
}

export default GameDetails
