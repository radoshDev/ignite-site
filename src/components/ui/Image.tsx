import { FC } from "react"
import { getImagePath } from "../../utils/getImagePath"

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
				src={getImagePath(src, 640)}
				alt={alt}
				width={width}
				height={height}
				loading="lazy"
			/>
		</picture>
	)
}

export default Image
