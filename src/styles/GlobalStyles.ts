import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-family: 'Montserrat', sans-serif;
		&::-webkit-scrollbar {
			width: 0.5rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: darkgray;
		}
	}
	h2 {
		font-size: 3rem;
		font-family: 'Abril Fatface', cursive;
		font-weight: lighter;
	}
	h3 {
		font-size: 1.3rem;
		color: #333;
	}
	p {
		color: #696969;
		font-size: 1.2rem;
		line-height: 1.5;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	img {
		max-width: 100%;
    height: auto;
	}
`
