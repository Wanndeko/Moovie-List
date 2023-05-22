import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
`

export const LogoHeader = styled.p`
  font-size: 3rem;
  color: #eee;
  transform: skew(25deg);

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`

export const BtnsHeader = styled.div`
  display: flex;
  gap: 25px;

  padding: 10px;
`

export const BtnHeader = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;

    width: 65%;
    height: 1px;
    background-color: #ff0000;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ease 0.4s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.4s;
  }
`
