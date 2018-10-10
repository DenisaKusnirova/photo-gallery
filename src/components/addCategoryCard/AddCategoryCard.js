import React from 'react'
import './addCategoryCard.scss'

const AddCategoryCard = (props) => {
  return (
    <button onClick={props.openForm} className="add-item-card">
      <p className="plus-btn">+</p>
      <p className="add-category-header">PRIDAŤ KATEGÓRIU</p>
    </button>
  )
}

export default AddCategoryCard