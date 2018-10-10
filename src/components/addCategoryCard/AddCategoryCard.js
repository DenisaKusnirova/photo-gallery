import React from 'react'
import './addCategoryCard.scss'

const AddCategoryCard = (props) => {
 return (
    <div className="card-add-category" onClick={props.openForm}>
      <img src={require('../../resources/add-category.png')} alt="new-category-card" />
    </div>
  )
}

export default AddCategoryCard