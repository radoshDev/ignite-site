import { FC, MouseEventHandler, ReactNode } from "react"
import styled from "styled-components"

const S = {
	Button: styled.button`
		font-size: 1rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background-color: #ff7676;
		color: white;
		&:disabled {
			background-color: gray;
		}
	`,
}

type Props = {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	type?: "submit" | "button" | "reset"
	className?: string
}

const Button: FC<Props> = ({ children, type, ...props }) => {
	return (
		<S.Button {...props} type={type || "button"}>
			{children}
		</S.Button>
	)
}

export default Button
