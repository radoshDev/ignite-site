import { FC, ReactElement } from "react"
import styled from "styled-components/macro"
import { useAppSelector } from "../../app/hooks"
import { useGetGamesQuery } from "../../app/slices/gameSlice"
// import { useParamsOptions } from "../../hooks/useOptions"
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
			margin-bottom: 2rem;
			@media (min-width: 640px) {
				font-size: 3rem;
			}
		}
	`,
}

const Games: FC = () => {
	const { search: searchText, sort, isLoading } = useAppSelector(s => s.options)

	const {
		data: gamesData,
		isFetching,
		isError,
	} = useGetGamesQuery(
		{ page: 1, searchText, sortBy: sort.value },
		{ skip: isLoading }
	)

	let content: ReactElement
	if (isFetching) {
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
			<h2 className="title">{sort.label}</h2>
			<div className="games_wrapper">{content}</div>
		</S.Games>
	)
}

export default Games
