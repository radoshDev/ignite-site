import { FC } from "react"
import { getImagePath } from "../../utils/getImagePath"
import imagePlaceholder from "../../assets/img/no-image-9-16.svg"

type Props = {
	src: string
	alt: string
	width?: number
	height?: number
}

const Image: FC<Props> = ({ src, alt, height, width }) => {
	return (
		<picture>
			<source media="(min-width: 992px)" srcSet={getImagePath(src, 1280)} />
			<img
				src={getImagePath(src, 640) || imagePlaceholder}
				alt={alt}
				width={width}
				height={height}
				loading="lazy"
			/>
		</picture>
	)
}

export default Image
