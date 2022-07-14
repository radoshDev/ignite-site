import { FC } from "react"
import styled from "styled-components"
import { Game } from "../../types/games"
import PlatformIcon from "./PlatformIcon"

const S = {
	Platforms: styled.div`
		.title {
			margin-bottom: 0.5rem;
		}
		.platforms-list {
			display: flex;
			gap: 1rem;
			img {
				height: 30px;
				@media (min-width: 660px) {
					height: auto;
				}
			}
		}
	`,
}

type Props = {
	platforms: Game["platforms"]
}

const Platforms: FC<Props> = ({ platforms }) => {
	const content =
		!platforms || platforms.length === 0 ? (
			<p>Platforms is not added</p>
		) : (
			platforms.map(item => (
				<PlatformIcon key={item.platform.id} name={item.platform.name} />
			))
		)

	return (
		<S.Platforms>
			<h3 className="title">Platforms</h3>
			<div className="platforms-list">{content}</div>
		</S.Platforms>
	)
}

export default Platforms
