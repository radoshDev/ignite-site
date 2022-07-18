import { FC, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Select from "react-select"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectSort, setLoading, setSort } from "../../app/slices/optionsSlice"
import { SORT_OPTIONS } from "../../constants"
import { SortOption } from "../../types/storeTypes"
import { addUrlSearch } from "../../utils/addUrlSearch"

const SortSelect: FC = () => {
	const dispatch = useAppDispatch()
	const selectedSort = useAppSelector(selectSort)
	const [params] = useSearchParams()

	useEffect(() => {
		const sortOption = SORT_OPTIONS.find(
			option => option.value === params.get("sortBy")
		)
		if (sortOption) {
			dispatch(setSort(sortOption))
		} else {
			dispatch(setLoading(false))
		}
	}, [])

	const handleSelectChange = (option: SortOption | null): void => {
		if (option) {
			dispatch(setSort(option))
			addUrlSearch("sortBy", option.value)
		}
	}
	return (
		<Select
			className="sort-select"
			options={SORT_OPTIONS}
			isSearchable={false}
			value={selectedSort}
			onChange={handleSelectChange}
			theme={theme => ({
				...theme,
				borderRadius: 0,
				colors: {
					...theme.colors,
					primary: "#ff7676",
					primary75: "#ff7676bf",
					primary50: "#ff767680",
					primary25: "#ff767640",
				},
			})}
		/>
	)
}

export default SortSelect
