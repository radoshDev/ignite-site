import { UrlSearchKeys } from "../types/common"

export const addUrlSearch = (key: UrlSearchKeys, value: string): void => {
	const url = new URL(window.location.href)
	const searchParams = new URLSearchParams(url.search)
	searchParams.set(key, value)
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`
	window.history.replaceState(null, "sortBy", newPathname)
}
