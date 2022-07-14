import styled from "styled-components/macro"

export const StyledButton = styled.button`
	top: calc(50% - 20px);
	position: absolute;
	background: white;
	border-radius: 30px;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;
	z-index: 2;
	&.next {
		right: 10px;
	}
	&.prev {
		left: 10px;
		transform: scale(-1);
	}
`
export const Container = styled.div`
	padding: 0 1rem;
	@media (min-width: 540px) {
		padding: 0 2rem;
	}
	@media (min-width: 769px) {
		padding: 0 6rem;
	}
`
