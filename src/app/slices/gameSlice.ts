import api from "../../api"
import { GAME_PAGE_SIZE } from "../../constants"
import {
	GameDetails,
	GameScreenshot,
	GameScreenshotsResponse,
} from "../../types/gameDetails"
import { Game, GameResponse } from "../../types/games"
import { GetGamesArgument } from "../../types/storeTypes"
import { getGamesParams } from "../../utils/getGamesParams"

const apiKey = process.env.REACT_APP_RAWG_API
if (!apiKey) throw new Error("REACT_APP_RAWG_API is undefined")

export const gameSlice = api.injectEndpoints({
	endpoints: builder => ({
		getGames: builder.query<GameResponse, GetGamesArgument>({
			query: ({ sortBy, page, searchText }) => ({
				url: "games",
				params: {
					...getGamesParams(sortBy),
					page,
					search: searchText,
					page_size: GAME_PAGE_SIZE,
					key: apiKey,
				},
			}),
			async onQueryStarted(
				{ page, sortBy, searchText },
				{ queryFulfilled, dispatch }
			) {
				if (page > 1) {
					const { data } = await queryFulfilled
					dispatch(
						gameSlice.util.updateQueryData(
							"getGames",
							{ page: 1, sortBy, searchText },
							draft => {
								draft.results.push(...data.results)
							}
						)
					)
				}
			},
		}),
		getSearchGames: builder.query<GameResponse, string>({
			query: searchText => ({
				url: "games",
				params: {
					search: searchText,
					page_size: GAME_PAGE_SIZE,
					key: apiKey,
				},
			}),
		}),
		getGameDetails: builder.query<GameDetails, Game["id"]>({
			query: id => ({ url: `games/${id}`, params: { key: apiKey } }),
		}),
		getScreenShots: builder.query<GameScreenshot[], Game["id"]>({
			query: gameId => ({
				url: `games/${gameId}/screenshots`,
				params: { key: apiKey },
			}),
			transformResponse: (response: GameScreenshotsResponse) =>
				response.results,
		}),
	}),
})

export const {
	useGetGameDetailsQuery,
	useGetGamesQuery,
	useGetScreenShotsQuery,
	useGetSearchGamesQuery,
	useLazyGetSearchGamesQuery,
	useLazyGetGamesQuery,
} = gameSlice
