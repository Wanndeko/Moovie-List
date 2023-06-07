import { styled } from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: #00000082;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  border-radius: 15px;

  button {
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 30px;
    color: #ff0000;
  }

  iframe {
    border: none;
    width: 100%;
    box-shadow: 0px 0px 6px 1px #eee;
  }
`
