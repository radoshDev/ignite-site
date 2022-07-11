declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test"
		REACT_APP_RAWG_API: string
	}
}
