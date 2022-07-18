import { SortOption } from "../types/storeTypes"

export const GAME_PAGE_SIZE = 12

export const SORT_OPTIONS: SortOption[] = [
	{ value: "new", label: "New" },
	{ value: "popular", label: "Popular" },
	{ value: "upcoming", label: "Upcoming" },
]
