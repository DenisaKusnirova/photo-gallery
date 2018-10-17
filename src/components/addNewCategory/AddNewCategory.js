import React, { Component } from 'react'
import './addNewCategory.scss'
import { handleAddGallery } from '../../actions/galleries'
import { connect } from 'react-redux'

class AddNewCategory extends Component {
  state = {
    category: '',
    error: ''
  }

  handleChange = (event) => {
    const category = event.target.value
    this.setState(() => ({ category }))
  }

  onFormSubmit = (e) => {
    e.preventDefault()

    const { category } = this.state
    const { galleries } = this.props

    if (category === '') {
      this.setState(() => ({
        error: 'Please enter a category name.'
      }))
      return
    }

    if (galleries[category]) {
      this.setState(() => ({
        error: 'Please choose a different category name.'
      }))
      return
    }

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
            {this.state.error && <p className="error-msg">{this.state.error}</p>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ galleries }) => {
  return {
    galleries
  }
}

export default connect(mapStateToProps, { handleAddGallery })(AddNewCategory)