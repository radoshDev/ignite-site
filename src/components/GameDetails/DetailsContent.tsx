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
				margin: 0.5rem 0;
			}
			h3 {
				margin: 1rem 0;
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
	const { background_image, description, id, name, platforms, rating } = game

	return (
		<S.DetailsContent>
			<Statistic name={name} platforms={platforms} rating={rating} />
			{background_image && (
				<div className="image-wrapper">
					<Image src={background_image} alt={name} width={1370} height={856} />
				</div>
			)}
			<div
				className="description"
				dangerouslySetInnerHTML={{ __html: description }}
			/>
			<GameGallery gameId={id} />
		</S.DetailsContent>
	)
}

export default DetailsContent
