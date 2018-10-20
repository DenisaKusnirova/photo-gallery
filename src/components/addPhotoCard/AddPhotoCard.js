import React from 'react'
import './addPhotoCard.scss'
import AspectRatio from 'react-aspect-ratio'

const AddPhotoCard = (props) => {
  return (
    <AspectRatio ratio={1.2}>
      <div className="card-add-photo" onClick={props.addPhoto}>
        <img src={require('../../resources/ic_add_photo.svg')} alt="addphoto" />
        <p>ADD PHOTOS</p>
      </div>
    </AspectRatio>
  )
}

export default AddPhotoCard