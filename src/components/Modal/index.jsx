import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

import api from '../../services/api'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getApiMovie() {
      const {
        data: { results }
      } = await api.get(`/movie/${movieId}/videos`)

      setMovie(results[1])
      console.log(results)
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
            width="100px"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
