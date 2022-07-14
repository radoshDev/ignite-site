import { FC } from "react"
import styled from "styled-components/macro"
import { Game } from "../../types/games"
import RatingStars from "../ui/RatingStars"
import PlatformIcon from "./PlatformIcon"
import Platforms from "./Platforms"

const S = {
	Statistic: styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 2rem;
		gap: 1rem 2rem;
		.rating {
			h3 {
				display: inline-block;
			}
		}
	`,
}

type Props = {
	name: Game["name"]
	rating: Game["rating"]
	platforms: Game["platforms"]
}

const Statistic: FC<Props> = ({ name, platforms, rating }) => {
	return (
		<S.Statistic>
			<div className="rating">
				<h3>{name}</h3>
				<p>Rating: {rating}</p>
				<RatingStars rating={rating} fill="#fd7277" />
			</div>
			<Platforms platforms={platforms} />
		</S.Statistic>
	)
}

export default Statistic
