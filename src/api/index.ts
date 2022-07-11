import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GameDetails, GameScreenshot } from "../types/gameDetails"
import { Game, SortBy, GameResponse } from "../types/games"
import { getGamesParams } from "../utils/getGamesParams"

const apiKey = process.env.REACT_APP_RAWG_API
if (!apiKey) throw new Error("REACT_APP_RAWG_API is undefined")

const baseUrl = "https://api.rawg.io/api/"

export default createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getGames: builder.query<Game[], SortBy>({
			query: sortBy => ({ url: "games", params: { ...getGamesParams(sortBy), key: apiKey } }),
			transformResponse: (response: GameResponse) => response.results,
		}),
		getSearchGames: builder.query<Game[], string>({
			query: searchText => ({
				url: "games",
				params: { search: searchText, page_size: 9, key: apiKey },
			}),
		}),
		getGameDetails: builder.query<GameDetails, Game["id"]>({
			query: id => ({ url: `games/${id}`, params: { key: apiKey } }),
		}),
		getScreenShots: builder.query<GameScreenshot[], string>({
			query: gameName => ({
				url: `games/${gameName}/screenshots`,
				params: { key: apiKey },
			}),
		}),
	}),
})
