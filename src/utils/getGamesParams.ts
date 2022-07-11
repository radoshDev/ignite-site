import { SortBy } from "../types/games"
import { getFormattedDate } from "./getFormattedDate"

type Params = {
	dates: `${string},${string}`
	ordering: string
	page_size: number
}

export const getGamesParams = (sortBy: SortBy): Params => {
	const currentDate = getFormattedDate()
	const lastYear = getFormattedDate("last-year")
	const nextYear = getFormattedDate("next-year")
	const pageSize = 10

	switch (sortBy) {
		case "new":
			return { dates: `${lastYear},${currentDate}`, ordering: "-released", page_size: pageSize }
		case "upcoming":
			return { dates: `${currentDate},${nextYear}`, ordering: "-added", page_size: pageSize }
		default:
			return { dates: `${lastYear},${currentDate}`, ordering: "-rating", page_size: pageSize }
	}
}
