import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'

function Slider({ info, title }) {
  console.log(info, title)
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info &&
          info.map((iten, index) => (
            <SwiperSlide key={index}>
              <Card iten={iten} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Slider
