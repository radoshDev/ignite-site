import { FC } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const S = {
	Games: styled(motion.div)``,
	List: styled.div`
		min-height: 80vh;
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		grid-column-gap: 3rem;
		grid-row-gap: 5rem;
	`,
}

type Props = {
	gamesList: string
	title: string
}

const Games: FC<Props> = ({ gamesList, title }) => {
	return <S.Games>Games Component</S.Games>
}

export default Games
