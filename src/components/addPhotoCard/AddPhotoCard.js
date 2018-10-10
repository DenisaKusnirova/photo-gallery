import React from 'react'
import './addPhotoCard.scss'

const AddPhotoCard = (props) => {
  return (
    <div className="card-add-photo" onClick={props.addPhoto}>
      <img src={require('../../resources/add-photo.png')} alt="addphoto" />
    </div>
  )
}

export default AddPhotoCard