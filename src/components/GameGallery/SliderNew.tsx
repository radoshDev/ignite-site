import { FC } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { GameScreenshot } from "../../types/gameDetails"
import { getImagePath } from "../../utils/getImagePath"
// eslint-disable-next-line import/no-unresolved
import "@splidejs/react-splide/css"
import Image from "../ui/Image"

type Props = {
	images: GameScreenshot[]
}

const SliderNew: FC<Props> = ({ images }) => {
	return (
		<Splide>
			{images.map(image => (
				<SplideSlide key={image.id}>
					<Image src={getImagePath(image.image, 1280)} alt="game slide" />
				</SplideSlide>
			))}
		</Splide>
	)
}

export default SliderNew
