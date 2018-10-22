import React from 'react'
import './addCategoryCard.scss'
import 'react-aspect-ratio/aspect-ratio.css'
import AspectRatio from 'react-aspect-ratio';

const AddCategoryCard = (props) => {
 return (
   <AspectRatio ratio="1.2">
      <div className="card-add-category" onClick={props.openForm}>
        <img className="plus-ic" src={require('../../resources/ic_plus.svg')} alt="ic_plus" />
        &nbsp; ADD CATEGORY
      </div>
    </AspectRatio>
  )
}

export default AddCategoryCard