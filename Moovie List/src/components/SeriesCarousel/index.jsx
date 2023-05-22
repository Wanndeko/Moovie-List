import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { BsFillStarFill } from 'react-icons/bs'

import api from '../../services/api'
import { Container, Image, ContainerSeries, Card } from './style'

function CarouselSeries() {
  const [cSeries, setCSeries] = useState([])

  useEffect(() => {
    async function getApiCSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      setCSeries(results)
    }
    getApiCSeries()
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
      <h1>Series</h1>
      <Carousel itemsToShow={5} breakPoints={breakPoints}>
        {cSeries &&
          cSeries.map((serie) => (
            <ContainerSeries key={serie.id}>
              <Card>
                <Image
                  src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                />
                <h2>{serie.name}</h2>
                <p>
                  Média de votos: <BsFillStarFill />
                  {serie.vote_average}
                </p>
              </Card>
            </ContainerSeries>
          ))}
      </Carousel>
    </Container>
  )
}

export default CarouselSeries
