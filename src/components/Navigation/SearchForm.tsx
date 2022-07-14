import { FC, useState, ChangeEventHandler, FormEventHandler } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import styled from "styled-components/macro"
import { useLazyGetSearchGamesQuery } from "../../app/slices/gameSlice"
import Button from "../ui/Button"

const S = {
	SearchForm: styled.form`
		flex: 1;
		max-width: 500px;
		min-width: 288px;
		display: flex;
		margin: 1rem 0;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		.text-field {
			width: 100%;
			font-size: 1rem;
			font-weight: bold;
			padding: 0.5rem;
			border: none;
		}
	`,
}

const SearchForm: FC = () => {
	const [params] = useSearchParams()
	const [searchValue, setSearchValue] = useState(params.get("word") || "")
	const [searchGames, { isFetching }] = useLazyGetSearchGamesQuery()
	const navigate = useNavigate()

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		const { value } = event.target
		setSearchValue(value)
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		if (searchValue) {
			navigate(`search?word=${searchValue}`, { replace: true })
			await searchGames(searchValue)
		}
	}
	return (
		<S.SearchForm onSubmit={handleSubmit}>
			<input
				className="text-field"
				type="text"
				value={searchValue}
				onChange={handleInputChange}
			/>
			<Button type="submit" disabled={isFetching}>
				Search
			</Button>
		</S.SearchForm>
	)
}

export default SearchForm
