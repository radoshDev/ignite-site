export const getPlatformName = (platform: string): string => {
	const lowerPlatform = platform.toLowerCase()
	switch (true) {
		case lowerPlatform.includes("playstation"):
			return "playstation"
		case lowerPlatform.includes("xbox"):
			return "xbox"
		case lowerPlatform.includes("pc"):
			return "steam"
		case lowerPlatform.includes("nintendo"):
			return "nintendo"
		case lowerPlatform.includes("ios"):
			return "apple"
		default:
			return "gamepad"
	}
}
