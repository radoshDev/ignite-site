import { SortBy } from "../types/games"
import { getFormattedDate } from "./getFormattedDate"

type Params = {
	dates: `${string},${string}`
	ordering: string
}

export const getGamesParams = (sortBy: SortBy): Params => {
	const currentDate = getFormattedDate()
	const lastYear = getFormattedDate("last-year")
	const nextYear = getFormattedDate("next-year")

	switch (sortBy) {
		case "new":
			return {
				dates: `${lastYear},${currentDate}`,
				ordering: "-released",
			}
		case "upcoming":
			return {
				dates: `${currentDate},${nextYear}`,
				ordering: "-rating",
			}
		default:
			return {
				dates: `${lastYear},${currentDate}`,
				ordering: "-rating",
			}
	}
}
