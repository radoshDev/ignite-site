import { FC, ReactElement } from "react"
import styled from "styled-components/macro"
import { useGetGamesQuery } from "../../app/slices/gameSlice"
import { useGetSearchParams } from "../../hooks/useGetSearchParams"
import GamesList from "./GamesList"
import MoreButton from "./MoreButton"

const S = {
	Games: styled.div`
		padding: 1rem 0;
		@media (min-width: 640px) {
			padding: 3rem 0;
		}
		& > .title {
			font-size: 2rem;
			@media (min-width: 640px) {
				font-size: 3rem;
			}
		}
	`,
}

const Games: FC = () => {
	const { searchText, sortBy } = useGetSearchParams()
	const {
		data: gamesData,
		isLoading,
		isError,
	} = useGetGamesQuery({ page: 1, searchText, sortBy })

	let content: ReactElement
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isError) {
		content = <p style={{ color: "red" }}>Something went wrong</p>
	} else if (!gamesData || gamesData.results?.length === 0) {
		content = <p>Games not found</p>
	} else {
		content = (
			<>
				<GamesList games={gamesData.results} />
				<MoreButton gamesCount={gamesData.count} />
			</>
		)
	}

	return (
		<S.Games>
			<h2 className="title">Upcoming</h2>
			<div className="games_wrapper">{content}</div>
		</S.Games>
	)
}

export default Games
