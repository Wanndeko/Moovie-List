import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  box-shadow: 1px -9px 20px 20px #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 15px;

  h1 {
    /* margin-bottom: 40px; */
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

  .rec.rec-item-wrapper {
    height: 600px;
    align-items: center;
  }
`

export const ContainerMovies = styled.div``

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: solid 2px #110d0de8;
  background-color: #13101075;
  box-shadow: 0px 0px 8px 0px #131515;
  overflow: hidden;
  border-radius: 10px;
  width: 250px;
  text-align: center;

  h2 {
    font-size: 1rem;
    color: #f4e2e2;
    margin-bottom: 1rem;
  }

  p {
    color: #eee;
  }

  svg {
    color: #f6be1e;
  }
`
