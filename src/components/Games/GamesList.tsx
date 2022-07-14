import { FC } from "react"
import styled from "styled-components"
import { Game as IGame } from "../../types/games"
import Game from "./Game"

const S = {
	GamesList: styled.div`
		min-height: 80vh;
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(287px, 1fr));
		gap: 3rem;
		@media (min-width: 1050px) {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			grid-row-gap: 5rem;
			grid-column-gap: 3rem;
		}
	`,
}

type Props = {
	games: IGame[]
}

const GamesList: FC<Props> = ({ games }) => {
	return (
		<S.GamesList>
			{games.map(game => (
				<Game key={game.id} game={game} />
			))}
		</S.GamesList>
	)
}

export default GamesList
