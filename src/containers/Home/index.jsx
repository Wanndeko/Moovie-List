import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ButtonsContainer } from './styles'
function Home() {
  const [movies, setMovies] = useState()
  const [topRatedMovies, setTopRatedMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [personPopular, setPersonPopular] = useState()

  useEffect(() => {
    async function getApiMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovies(results[0])
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      setTopRatedMovies(results)
    }

    async function getApiSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setTopSeries(results)
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular')

      setPopularSeries(results)
    }
    async function getPerson() {
      const {
        data: { results }
      } = await api.get('/person/popular')
      console.log(results)
      setPersonPopular(results)
    }

    getPerson()
    getPopularSeries()
    getApiSeries()
    getTopMovies()
    getApiMovies()
  }, [])

  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
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
              <img src={getImages(movies.poster_path)} alt="poster do filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topRatedMovies && (
        <Slider info={topRatedMovies} title={'Filmes populares'} />
      )}
      {topSeries && <Slider info={topSeries} title={'Series famosas'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Series do momento'} />
      )}
      {personPopular && (
        <Slider info={personPopular} title={'Artitas populares'} />
      )}
    </>
  )
}

export default Home

// https://image.tmdb.org/t/p/original/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg
