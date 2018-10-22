import React from 'react'
import './photoDetail.scss'
import ProgressiveImage from 'react-progressive-image'
import placeholder from '../../resources/placeholder.png'

const PhotoDetail = (props) => (
  <div className="photo-detail-container">
    <div className="inner-flexbox">
      <button onClick={props.renderPrevious} className="nav-button">
        <img className="photo-detail-arrow" src={require('../../resources/ic_prev.svg')} alt="ic_prec" />
      </button>
      <div className="white-container-photo">
        <button onClick={props.handleCloseDetail} className="close-button">
          <img className="photo-detail-ic" src={require('../../resources/ic_close.svg')} alt="ic_close" />
          &nbsp; CLOSE
        </button>
        <ProgressiveImage src={props.photoPath} placeholder={placeholder}>
          {src => <img src={src} alt="detail" className="photo-detail" />}
        </ProgressiveImage>
      </div>
      <button onClick={props.renderNext} className="nav-button">
        <img className="photo-detail-arrow" src={require('../../resources/ic_next.svg')} alt="ic_next" />
      </button>
    </div>
  </div>
)

export default PhotoDetail