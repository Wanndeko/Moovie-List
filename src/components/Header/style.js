import styled from 'styled-components'

export const HeaderContainer = styled.header`
  z-index: 5;
  position: fixed;
  top: 0;
  padding: 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  img {
    width: 30%;
  }

  background-color: ${(props) => (props.changeColor ? '#000' : 'transparent')};
  transition: background-color ease 0.5s;
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
`

export const Li = styled.li`
  font-weight: 600;
  font-size: 25px;
  position: relative;
  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    bottom: -10px;
    left: 0;
    position: absolute;
    background-color: #189b20;
    transition: width ease-in-out 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`
