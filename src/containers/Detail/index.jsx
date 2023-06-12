import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import {
  getMovieCredits,
  getMovieDetails,
  getMovieSimilar,
  getMovieVideo
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info } from './styles'

function Detail() {
  const { id } = useParams()

  const [movieVideos, setMovieVideos] = useState()
  const [movieDetails, setMovieDetails] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieCredits, setMovieCredits] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieVideo(id),
        getMovieDetails(id),
        getMovieSimilar(id),
        getMovieCredits(id)
      ])
        .then(([videos, details, similar, credits]) => {
          setMovieVideos(videos)
          setMovieDetails(details)
          setMovieSimilar(similar)
          setMovieCredits(credits)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movieVideos && (
        <>
          <Background image={getImages(movieDetails.backdrop_path)} />

          <Container>
            <Cover>
              <img src={getImages(movieDetails.poster_path)} />
            </Cover>
            <Info>
              <h2>{movieDetails.title}</h2>
              <SpanGenres genres={movieDetails.genres} />
              <p>{movieDetails.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
        </>
      )}
    </>
  )
}

export default Detail
