export const getImagePath = (path: string, size: number): string => {
	if (!path) return path
	const imagePath = path.includes("media/screenshots")
		? path.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
		: path.replace("/media/games/", `/media/resize/${size}/-/games/`)
	return imagePath
}
