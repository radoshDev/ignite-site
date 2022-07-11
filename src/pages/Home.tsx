import { FC } from "react"
import styled from "styled-components"

const S = {
	Home: styled.div`
		padding: 3rem 5rem;
	`,
}

const Home: FC = () => {
	return <S.Home>Home Component</S.Home>
}

export default Home
