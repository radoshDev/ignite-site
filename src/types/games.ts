export type SortBy = "new" | "upcoming" | "popular"

export type GameResponse = {
	count: number
	next: string
	previous: string | null
	results: Game[]
	user_platforms: boolean
}

export interface Game {
	slug: string
	name: string
	playtime: number
	platforms: Platform2[]
	stores: Store[]
	released: string
	tba: boolean
	background_image: string
	rating: number
	rating_top: number
	ratings: Rating[]
	ratings_count: number
	reviews_text_count: number
	added: number
	added_by_status: AddedByStatus
	metacritic?: unknown
	suggestions_count: number
	updated: string
	id: number
	score?: unknown
	clip?: unknown
	tags: Tag[]
	esrb_rating?: unknown
	user_game?: unknown
	reviews_count: number
	saturated_color: string
	dominant_color: string
	short_screenshots: ShortScreenshot[]
	parent_platforms: Platform2[]
	genres: Field[]
}

interface ShortScreenshot {
	id: number
	image: string
}

interface Tag {
	id: number
	name: string
	slug: string
	language: string
	games_count: number
	image_background: string
}

interface AddedByStatus {
	yet: number
	owned: number
	beaten: number
	toplay: number
	dropped: number
	playing: number
}

interface Rating {
	id: number
	title: string
	count: number
	percent: number
}

interface Store {
	store: Field
}

interface Platform2 {
	platform: Field
}

interface Field {
	id: number
	name: string
	slug: string
}
