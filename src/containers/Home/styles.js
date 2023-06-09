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
    left: 0;
    bottom: 0;
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
  overflow: hidden;
  @media (max-width: 740px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

export const Info = styled.div`
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

  @media (max-width: 740px) {
    padding: 0;
    width: 100%;
    h1 {
      font-size: 2rem;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const Poster = styled.div`
  img {
    width: 340px;
    border-radius: 10px;
    box-shadow: 0px -2px 8px 0px #05070885;

    @media (max-width: 740px) {
      width: 260px;
    }
  }
`
