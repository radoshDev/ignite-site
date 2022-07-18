import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SortOption } from "../../types/storeTypes"
import { RootState } from "../store"

const initialState = {
	sort: { value: "upcoming", label: "Upcoming" } as SortOption,
	search: "",
	isLoading: true,
}

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		setSort: (state, action: PayloadAction<SortOption>) => {
			state.sort = action.payload
			state.isLoading = false
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
	},
})

export const { setSort, setSearch, setLoading } = optionsSlice.actions

export const selectSort = (state: RootState): SortOption => state.options.sort
export const selectSearch = (state: RootState): string => state.options.search

export default optionsSlice.reducer
