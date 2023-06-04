import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Info, Poster, Container, ButtonsContainer } from './styles'
function Series() {
  const [series, setSeries] = useState()

  useEffect(() => {
    async function getApiSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setSeries(results[0])
    }
    getApiSeries()
  }, [])

  return (
    <>
      {series && (
        <Background
          img={`https://image.tmdb.org/t/p/original${series.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{series.name}</h1>
              <p>{series.overview}</p>
              <ButtonsContainer>
                <Button red>Assita Agora</Button>
                <Button>Assita o trailer</Button>
              </ButtonsContainer>
            </Info>

            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${series.poster_path}`}
                alt="poster do filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Series

// https://image.tmdb.org/t/p/original/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg
