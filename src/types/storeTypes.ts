import { SortBy } from "./games"

export type GetGamesArgument = {
	sortBy: SortBy
	page: number
	searchText: string
}

export type SortOption = { value: SortBy; label: string }
