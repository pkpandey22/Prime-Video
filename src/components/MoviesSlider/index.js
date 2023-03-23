import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
  }

  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem key={each.id} moviesDetails={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
