import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <>
      <div className="AppContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="PrimeImage"
        />
        <div className="MoviesContainer">
          <h1 className="MoviesHeading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
          <h1 className="MoviesHeading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
