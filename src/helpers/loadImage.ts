import { Dispatch, SetStateAction } from "react"

type FileName = `${string}.${string}`

export const loadImage = (
	imageName: FileName,
	setImage: Dispatch<SetStateAction<string>>
): void => {
	import(`../assets/img/${imageName}`)
		.then(img => {
			setImage(img.default)
			return false
		})
		.catch(error => {
			console.log(error)
		})
}
