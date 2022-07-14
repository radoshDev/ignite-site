import { motion } from "framer-motion"
import { FC, MouseEventHandler } from "react"
import styled from "styled-components/macro"
import { useGetGameDetailsQuery } from "../../app/slices/gameSlice"
import animations from "../../styles/animations"
import { Game as IGame } from "../../types/games"
import DetailsContent from "./DetailsContent"

const S = {
	CardShadow: styled(motion.div)`
		width: 100%;
		min-height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		cursor: pointer;
		&::-webkit-scrollbar {
			width: 0.5rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #ff7979;
		}
		&::-webkit-scrollbar-track {
			background-color: white;
		}
	`,
	GameDetails: styled(motion.div)`
		width: 80%;
		min-height: 100vh;
		border-radius: 1rem;
		padding: 2rem 1rem;
		background-color: white;
		position: absolute;
		left: 10%;
		top: 0;
		z-index: 10;
		cursor: default;
		@media (min-width: 500px) {
			padding: 2rem;
		}
		@media (min-width: 992px) {
			padding: 2rem 5rem;
		}
	`,
	Button: styled.button`
		border: none;
		background: #ff7676;
		color: white;
		font-size: 20px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		position: absolute;
		top: 2px;
		right: 2px;
		cursor: pointer;
	`,
}

type Props = {
	closeDetails: () => void
	game: IGame
}

const GameDetails: FC<Props> = ({ closeDetails, game }) => {
	const { id, name, background_image, rating, platforms } = game

	const { data: gameDetails } = useGetGameDetailsQuery(id, { skip: !id })

	const description = gameDetails?.description || ""

	const handleExitDetail: MouseEventHandler<HTMLDivElement> = event => {
		const elementId = (event.target as Element).id
		if (elementId === "shadow") {
			closeDetails()
		}
	}
	return (
		<S.CardShadow
			id="shadow"
			onClick={handleExitDetail}
			variants={animations.shadow}
			initial="hidden"
			animate="show"
			exit="exit"
			transition={{ duration: 0.2 }}>
			<S.GameDetails
				variants={animations.details}
				transition={{ duration: 0.5 }}>
				<DetailsContent
					game={{ background_image, id, name, platforms, rating, description }}
				/>
				<S.Button onClick={closeDetails}>X</S.Button>
			</S.GameDetails>
		</S.CardShadow>
	)
}

export default GameDetails
