import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

import { getMovieVideos } from '../../services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getApiMovie() {
      setMovie(await getMovieVideos(movieId))
    }
    getApiMovie()
  })

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <button onClick={() => setShowModal(false)}>
            <AiFillCloseCircle />
          </button>
          <iframe
            src={`https://youtube.com/embed/${movie.key}`}
            title="Youtube video player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
