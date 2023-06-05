import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Card({ iten }) {
  return (
    <Container>
      <img src={getImages(iten.poster_path || iten.profile_path)} />
      <h3>{iten.title || iten.name}</h3>
    </Container>
  )
}

export default Card
