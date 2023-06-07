import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import LogoHeader from '../../assets/logo.png'
import { HeaderContainer, Menu, Li } from './style'

function Header() {
  const [backgroundHeader, setBackgroundHeader] = useState(false)

  const { pathname } = useLocation()

  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      setBackgroundHeader(true)
    } else {
      setBackgroundHeader(false)
    }
  }

  return (
    <HeaderContainer changeColor={backgroundHeader}>
      <img src={LogoHeader} />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes('movies')}>
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </HeaderContainer>
  )
}

export default Header
