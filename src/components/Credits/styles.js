import { styled } from 'styled-components'

export const Title = styled.h4`
  font-size: 28px;
  font-weight: 700;
`

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: #fff;
    padding: 10px;
  }

  img {
    width: 150px;
  }
`
