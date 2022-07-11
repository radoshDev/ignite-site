export type GameScreenshotsResponse = {
	count: number
	next: string | null
	previous: string | null
	results: GameScreenshot[]
}
export type GameScreenshot = {
	id: number
	image: string
	hidden: boolean
	width: number
	height: number
}

export interface GameDetails {
	id: number
	slug: string
	name: string
	name_original: string
	description: string
	metacritic?: unknown
	metacritic_platforms: unknown[]
	released: string
	tba: boolean
	updated: string
	background_image: string
	background_image_additional: string
	website: string
	rating: number
	rating_top: number
	ratings: Rating[]
	reactions: Reactions
	added: number
	added_by_status: Addedbystatus
	playtime: number
	screenshots_count: number
	movies_count: number
	creators_count: number
	achievements_count: number
	parent_achievements_count: number
	reddit_url: string
	reddit_name: string
	reddit_description: string
	reddit_logo: string
	reddit_count: number
	twitch_count: number
	youtube_count: number
	reviews_text_count: number
	ratings_count: number
	suggestions_count: number
	alternative_names: unknown[]
	metacritic_url: string
	parents_count: number
	additions_count: number
	game_series_count: number
	user_game?: unknown
	reviews_count: number
	saturated_color: string
	dominant_color: string
	parent_platforms: Parentplatform[]
	platforms: Platform3[]
	stores: Store2[]
	developers: Developer[]
	genres: Developer[]
	tags: Tag[]
	publishers: Developer[]
	esrb_rating: Platform
	clip?: unknown
	description_raw: string
}

interface Tag {
	id: number
	name: string
	slug: string
	language: string
	games_count: number
	image_background: string
}

interface Developer {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

interface Store2 {
	id: number
	url: string
	store: Store
}

interface Store {
	id: number
	name: string
	slug: string
	domain: string
	games_count: number
	image_background: string
}

interface Platform3 {
	platform: Platform2
	released_at: string
	requirements: Record<string, unknown>
}

interface Platform2 {
	id: number
	name: string
	slug: string
	image?: unknown
	year_end?: unknown
	year_start?: number
	games_count: number
	image_background: string
}

interface Parentplatform {
	platform: Platform
}

interface Platform {
	id: number
	name: string
	slug: string
}

interface Addedbystatus {
	yet: number
	owned: number
	beaten: number
	toplay: number
	playing: number
}

interface Reactions {
	"13": number
	"16": number
}

interface Rating {
	id: number
	title: string
	count: number
	percent: number
}
