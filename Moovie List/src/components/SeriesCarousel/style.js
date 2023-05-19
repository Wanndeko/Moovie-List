import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  box-shadow: 1px -9px 20px 20px #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 35px;

  h1 {
    margin-bottom: 40px;
    color: #eee;
  }

  .rec.rec-arrow:hover {
    border-radius: 30%;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec.rec-pagination {
    visibility: hidden;
  }
`

export const ContainerSeries = styled.div`
  /* display: flex; */
`

export const Image = styled.img`
  width: 100%;
  box-shadow: 0px 0px 5px 2px #eee;
`
export const Card = styled.div`
  overflow: hidden;
  border-radius: 10px;
  height: 100%;
  width: 200px;

  p {
    text-align: center;
    color: #eee;
  }
`
