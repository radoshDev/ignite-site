import { FC, MouseEventHandler, useState, memo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components/macro"
import { getImagePath } from "../../utils/getImagePath"
import { Game as IGame } from "../../types/games"
import { GameDetails } from "../GameDetails"
import imagePlaceholder from "../../assets/img/no-image-9-16.svg"

const S = {
	Game: styled(motion.a)`
		min-height: 30vh;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
		text-align: center;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.title {
			display: inline-block;
			padding: 1.5rem 0.5rem 1rem;
		}
		.release-date {
			padding-bottom: 1rem;
		}
		& > img {
			display: block;
			max-height: 300px;
			object-fit: cover;
			flex: 1;
		}
	`,
}

type Props = {
	game: IGame
}

const Game: FC<Props> = ({ game }) => {
	const { name, released, background_image: image, id } = game
	const [isShowDetails, setIsShowDetails] = useState(false)
	const { location } = window
	const [backHistory] = useState(location.pathname + location.search)
	const href = `/game/${id}`

	const handleShowDetails: MouseEventHandler<HTMLAnchorElement> = event => {
		event.preventDefault()
		window.history.replaceState(null, name, href)
		setIsShowDetails(true)
		document.body.style.overflow = "hidden"
	}

	const handleCloseDetails = (): void => {
		setIsShowDetails(false)
		window.history.replaceState(null, "Games", backHistory)
		document.body.style.overflow = "auto"
	}

	return (
		<>
			<S.Game href={href} onClick={handleShowDetails}>
				<h3 className="title">{name}</h3>
				<p className="release-date">{released}</p>
				<img src={getImagePath(image, 640) || imagePlaceholder} alt={name} />
			</S.Game>
			<AnimatePresence>
				{isShowDetails && (
					<GameDetails game={game} closeDetails={handleCloseDetails} />
				)}
			</AnimatePresence>
		</>
	)
}

export default memo(Game)
