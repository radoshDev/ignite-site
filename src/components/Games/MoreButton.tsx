import { FC, useState } from "react"
import styled from "styled-components"
import { useAppSelector } from "../../app/hooks"
import { useLazyGetGamesQuery } from "../../app/slices/gameSlice"
import { GAME_PAGE_SIZE } from "../../constants"
// import { useParamsOptions } from "../../hooks/useOptions"
import Button from "../ui/Button"

const S = {
	MoreButton: styled(Button)`
		position: relative;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		margin: 2rem auto 0;
	`,
}

type Props = {
	gamesCount: number
}

const MoreButton: FC<Props> = ({ gamesCount }) => {
	const { search: searchText, sort } = useAppSelector(s => s.options)
	const [page, setPage] = useState(1)
	const [loadMoreGames, { isFetching: isMoreFetching }] = useLazyGetGamesQuery()
	const handleClickMore = async (): Promise<void> => {
		const nextPage = page + 1
		await loadMoreGames({ page: nextPage, sortBy: sort.value, searchText })
		setPage(nextPage)
	}
	const maxPages = Math.ceil(gamesCount / GAME_PAGE_SIZE)
	if (page === maxPages) return null
	return (
		<S.MoreButton
			onClick={handleClickMore}
			disabled={isMoreFetching}
			className="more-btn">
			{isMoreFetching ? "Loading..." : "Load More"}
		</S.MoreButton>
	)
}

export default MoreButton
