import { FC } from "react"
import styled from "styled-components/macro"

type Props = {
	rating: number
	fill?: string
}

const Star: FC<{ isHalf?: boolean; fill?: string }> = ({ isHalf, fill }) => {
	const dPath = isHalf
		? "M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
		: "M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
	return (
		<svg viewBox="0 0 20 20">
			<path d={dPath} fill={fill || "#FFC600"} />
		</svg>
	)
}

const S = {
	RatingStars: styled.div`
		display: flex;
		gap: 5px;
		height: 26px;
	`,
}

const RatingStars: FC<Props> = ({ rating, fill }) => {
	const starArray = Array.from({ length: Math.ceil(rating) })
	return (
		<S.RatingStars>
			{starArray.map((_, i) => (
				<Star key={i} isHalf={rating - i > 0 && rating - i < 1} fill={fill} />
			))}
		</S.RatingStars>
	)
}

export default RatingStars
