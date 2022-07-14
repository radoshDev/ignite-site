import { FC, ReactElement } from "react"
import styled from "styled-components/macro"
import { useGetScreenShotsQuery } from "../../app/slices/gameSlice"
import { Game } from "../../types/games"
import SliderNew from "./SliderNew"

const S = {
	Gallery: styled.div`
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	`,
}

type Props = {
	gameId: Game["id"]
}

const GameGallery: FC<Props> = ({ gameId }) => {
	const { data: images, isLoading } = useGetScreenShotsQuery(gameId)

	let content: ReactElement | null
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (!images || images.length === 0) {
		content = null
	} else {
		content = <SliderNew images={images} />
	}

	return <S.Gallery>{content}</S.Gallery>
}

export default GameGallery
