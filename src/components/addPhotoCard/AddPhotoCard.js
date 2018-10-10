import React from 'react'
import './addPhotoCard.scss'

const AddPhotoCard = (props) => {
  return (
    <button className="add-photo-card" onClick={props.addPhoto}>
      <img src={require('../../resources/camera-icon.png')} />
      <p className="add-category-header">PRIDAŤ FOTKY</p>
    </button>
  )
}

export default AddPhotoCard