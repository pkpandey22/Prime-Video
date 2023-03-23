import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {moviesDetails} = props
  const {videoUrl, thumbnailUrl} = moviesDetails

  return (
    <div className="MovieItemContainer">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="MovieImage" />
        }
        className="popup-content"
      >
        {close => (
          <div className="ModalContainer">
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
              className="CloseButton"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="MoviePlayerContainer">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
