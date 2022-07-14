import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "https://api.rawg.io/api/"

const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: () => ({}),
})

export default api
