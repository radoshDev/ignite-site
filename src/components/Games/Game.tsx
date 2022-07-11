import { FC } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getImagePath } from "../../utils/getImagePath"

const S = {
	Game: styled(motion.div)`
		min-height: 30vh;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
		text-align: center;
		overflow: hidden;
		padding-top: 1.5rem;
		h3 {
			display: inline-block;
		}
		p {
			padding: 1rem 0 0.5rem;
		}
		img {
			width: 100%;
			height: 40vh;
			object-fit: cover;
			display: block;
		}
	`,
}

type Props = {
	name: string
	released: string
	image: string
	id: string
}

const Game: FC<Props> = ({ name, released, image, id }) => {
	return (
		<S.Game>
			<Link to={`/game/${id}`} replace>
				<motion.h3 layoutId={`title${id}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img layoutId={`image${id}`} src={getImagePath(image, 640)} alt={name} />
			</Link>
		</S.Game>
	)
}

export default Game
