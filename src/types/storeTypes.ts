import { SortBy } from "./games"

export type GetGamesArgument = {
	sortBy: SortBy
	page: number
	searchText: string
}
