import { styled, keyframes } from 'styled-components'

const scale = keyframes`
from {
    transform: scale(0);
}

to {
    transform: scale(1);
}

`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: none;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1200px;
  margin-top: -100px;
  color: #eee;
  z-index: 999;
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 5;
  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: 0px 7px 29px 0px #64646f33;
    animation: ${scale} 0.5s linear;
  }
`
export const Info = styled.div`
  z-index: 999;
  gap: 10px;
`
export const ContainerMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 30px 0;
    gap: 10px;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }

  iframe {
    border: none;
  }
`
