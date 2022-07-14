/* eslint-disable react/no-danger */
import { FC } from "react"
import styled from "styled-components/macro"
import { GameDetails } from "../../types/gameDetails"
import GameGallery from "../GameGallery/GameGallery"
import Statistic from "./Statistic"
import { Game } from "../../types/games"
import Image from "../ui/Image"

const S = {
	DetailsContent: styled.div`
		.image-wrapper {
			margin-bottom: 2rem;
			img {
				max-width: 100%;
				height: auto;
				background-color: lightgrey;
			}
		}
		.description {
			margin-bottom: 2rem;
			p {
				margin-bottom: 0.5rem;
			}
		}
	`,
}

type Props = {
	game: Pick<
		GameDetails,
		"name" | "id" | "background_image" | "rating" | "description"
	> &
		Pick<Game, "platforms">
}

const DetailsContent: FC<Props> = ({ game }) => {
	console.log(game)

	return (
		<S.DetailsContent>
			<Statistic
				name={game.name}
				platforms={game.platforms}
				rating={game.rating}
			/>
			<div className="image-wrapper">
				<Image
					src={game.background_image}
					alt={game.name}
					width={1370}
					height={856}
				/>
			</div>
			<div
				className="description"
				dangerouslySetInnerHTML={{ __html: game.description }}
			/>
			<GameGallery gameId={game.id} />
		</S.DetailsContent>
	)
}

export default DetailsContent
