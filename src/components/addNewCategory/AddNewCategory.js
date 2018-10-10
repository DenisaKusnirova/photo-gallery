import React, { Component } from 'react'
import './addNewCategory.scss'
import { handleAddGallery } from '../../actions/galleries'
import { connect } from 'react-redux'

class AddNewCategory extends Component {
  state = { category: '' }

  handleChange = (event) => {
    const category = event.target.value
    this.setState(() => ({ category }))
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.category)
    this.props.handleAddGallery(this.state.category.replace(/\//g, ''))
    this.setState(() => ({
      category: ''
    }))
    this.props.handleClose()
  }

  render() {
    return (
      <div className="add-category-container">
        <div>
          <button onClick={this.props.handleClose} className="close-btn">X ZAVRIEŤ</button>
          <div className="add-category-white-card">
            <h4>PRIDAŤ KATEGÓRIU</h4>
            <form onSubmit={this.onFormSubmit}>
              <input
                placeholder="ZADAJTE NÁZOV KATEGÓRIE"
                value={this.state.category}
                onChange={this.handleChange}
              />
              <button type="submit" className="add-category-btn">+ PRIDAŤ</button>
            </form>
            <hr className="hr-new-category" />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { handleAddGallery })(AddNewCategory)