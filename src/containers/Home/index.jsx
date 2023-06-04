import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Info, Poster, Container, ButtonsContainer } from './styles'
function Home() {
  const [movies, setMovies] = useState()
  const [topRatedMovies, setTopRatedMovies] = useState()

  useEffect(() => {
    async function getApiMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')
      // console.log(results)
      setMovies(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')
      console.log(results)
      setTopRatedMovies(results[0])
    }

    getTopMovies()
    getApiMovies()
  }, [])

  return (
    <>
      {movies && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ButtonsContainer>
                <Button red>Assita Agora</Button>
                <Button>Assita o trailer</Button>
              </ButtonsContainer>
            </Info>

            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                alt="poster do filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Home

// https://image.tmdb.org/t/p/original/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg
