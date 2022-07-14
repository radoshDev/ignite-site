import { useSearchParams } from "react-router-dom"
import { SortBy } from "../types/games"
import { GetGamesArgument } from "../types/storeTypes"

export const useGetSearchParams = (): Omit<GetGamesArgument, "page"> => {
	const [params] = useSearchParams()
	const searchText = params.get("word") || ""
	const sortBy: SortBy = (params.get("sortBy") as SortBy) || "upcoming"
	return { searchText, sortBy }
}
