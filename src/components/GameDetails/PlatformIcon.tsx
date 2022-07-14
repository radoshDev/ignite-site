import { FC, useEffect, useState } from "react"
import styled from "styled-components/macro"
import { loadImage } from "../../helpers/loadImage"
import { getPlatformName } from "../../utils/getPlatformName"

const S = {
	Icon: styled.figure`
		position: relative;
		display: flex;
		align-items: center;
		figcaption {
			position: absolute;
			left: 50%;
			bottom: -30px;
			white-space: nowrap;
			transform: translateX(-50%);
			transition: opacity 0.3s ease;
			color: white;
			background-color: #5f5f5f;
			padding: 5px 10px;
			border-radius: 1rem;
			pointer-events: none;
		}
	`,
}

type Props = {
	name: string
}

const PlatformIcon: FC<Props> = ({ name }) => {
	const [image, setImage] = useState("")
	const [tip, setTip] = useState(false)

	useEffect(() => {
		loadImage(`${getPlatformName(name)}.svg`, setImage)
	}, [name])

	if (!image) return null

	return (
		<S.Icon onMouseOver={() => setTip(true)} onMouseLeave={() => setTip(false)}>
			<img src={image} title={name} alt={name} />
			<figcaption style={{ opacity: tip ? "1" : "0" }}>{name}</figcaption>
		</S.Icon>
	)
}

export default PlatformIcon
