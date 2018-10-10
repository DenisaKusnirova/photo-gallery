import React from 'react'
import './photoDetail.scss'
import ProgressiveImage from 'react-progressive-image'
import placeholder from '../../resources/placeholder.png'

const PhotoDetail = (props) => (
  <div className="photo-detail-container">
    <div style={{ width: '90%' }}>
      <button onClick={props.handleCloseDetail} className="close-button">X CLOSE</button>
      <div className="photo-detail-flexbox">
        <button onClick={props.renderPrevious} className="prev-btn">{"<"}</button>
        <div className="white-container-photo">
            <ProgressiveImage src={props.photoPath} placeholder={placeholder}>
              {src => <img src={src} alt="detail" className="photo-detail"/>}
            </ProgressiveImage>
        </div>
        <button onClick={props.renderNext} className="prev-btn">></button>
      </div>
    </div>
  </div>
)

export default PhotoDetail