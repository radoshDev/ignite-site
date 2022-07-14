import { Variants } from "framer-motion"

type Keys = "description" | "shadow" | "details"
const animations: Record<Keys, Variants> = {
	description: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.1,
			},
		},
	},
	shadow: {
		hidden: {
			opacity: 0,
			background: "rgba(0,0,0,0)",
		},
		show: {
			opacity: 1,
			background: "rgba(0,0,0,0.5)",
		},
		exit: {
			background: "rgba(0,0,0,0)",

			transition: {
				duration: 0.2,
				delay: 0.15,
			},
		},
	},
	details: {
		hidden: {
			y: "100vh",
		},
		show: {
			y: 0,
		},
		exit: {
			y: "100%",
		},
	},
}

export default animations
