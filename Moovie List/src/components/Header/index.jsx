import { useNavigate } from 'react-router-dom'

import { LogoHeader, BtnHeader, HeaderContainer, BtnsHeader } from './style'

function Header() {
  const navigate = useNavigate()

  function goToMovies() {
    navigate('/')
  }
  function goToSeries() {
    navigate('/series')
  }

  return (
    <HeaderContainer>
      <LogoHeader>Moovie List</LogoHeader>
      <BtnsHeader>
        <BtnHeader movies onClick={goToMovies}>
          Filmes
        </BtnHeader>
        <BtnHeader onClick={goToSeries}>Series</BtnHeader>
      </BtnsHeader>
    </HeaderContainer>
  )
}

export default Header
