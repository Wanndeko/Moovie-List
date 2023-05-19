import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Container = styled.div`
  z-index: 2;
  height: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Info = styled.div`
  /* z-index: 2; */
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #eeeeee;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const Poster = styled.div`
  img {
    width: 360px;
    border-radius: 10px;
    box-shadow: 0px -2px 8px 0px #05070885;
  }
`
