import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"
import logo from "../../assets/img/logo.svg"
import { Container } from "../../styles/common"
import SearchForm from "./SearchForm"

const S = {
	Navigation: styled.nav`
		padding: 1rem 0;
		position: sticky;
		top: 0;
		background-color: white;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
		z-index: 5;
		.nav__container {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 0 2rem;
			.logo {
				display: inline-flex;
				align-items: center;

				gap: 5px;
				cursor: pointer;
			}
		}
	`,
}

const Navigation: FC = () => {
	return (
		<S.Navigation>
			<Container className="nav__container">
				<Link to="/" className="logo">
					<img src={logo} alt="logo" width={24} height={24} />
					<h1>Ignite</h1>
				</Link>
				<SearchForm />
			</Container>
		</S.Navigation>
	)
}

export default Navigation
