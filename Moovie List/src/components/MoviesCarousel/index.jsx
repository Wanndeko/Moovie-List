import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { BsFillStarFill } from 'react-icons/bs'

import api from '../../services/api'
import { Container, Image, ContainerMovies, Card } from './style'

function CarouselMovies() {
  const [cMovies, setCMovies] = useState([])

  useEffect(() => {
    async function getApiCMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setCMovies(results)
    }
    getApiCMovies()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1300, itemsToShow: 5, itemsToScroll: 5 }
  ]

  return (
    <Container>
      <h1>Filmes</h1>
      <Carousel itemsToShow={5} breakPoints={breakPoints}>
        {cMovies &&
          cMovies.map((movie) => (
            <ContainerMovies key={movie.id}>
              <Card>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />

                <h2>{movie.title}</h2>
                <p>
                  Média de votos: <BsFillStarFill />
                  {movie.vote_average}
                </p>
              </Card>
            </ContainerMovies>
          ))}
      </Carousel>
    </Container>
  )
}

export default CarouselMovies
