import { format, addYears, subYears } from "date-fns/fp"

export const getFormattedDate = (year?: "last-year" | "next-year"): string => {
	if (year === "last-year") {
		return format("yyyy-MM-dd", subYears(1, new Date()))
	}
	if (year === "next-year") {
		return format("yyyy-MM-dd", addYears(1, new Date()))
	}

	return format("yyyy-MM-dd", new Date())
}
