import React from 'react'
import './photoDetail.scss'

const PhotoDetail = (props) => (
  <div className="photo-detail-container">
    <div style={{ width: '50%' }}>
      <button onClick={props.handleCloseDetail} className="close-button">X CLOSE</button>
      <div className="photo-detail-flexbox">
        <button onClick={props.renderPrevious} className="prev-btn">{"<"}</button>
        <div className="white-container-photo">
          <img src={props.photoPath} className="photo-detail" />
        </div>
        <button onClick={props.renderNext} className="prev-btn">></button>
      </div>
    </div>
  </div>
)

export default PhotoDetail