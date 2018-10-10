import React, { Component } from 'react'
import './categories.scss'
import Category from '../category/Category'
import { connect } from 'react-redux'
import { getImgUrl } from '../../api'
import AddNewCategory from '../addNewCategory/AddNewCategory'
import AddCategoryCard from '../addCategoryCard/AddCategoryCard'
import { handleGetPhotosForGallery } from '../../actions/images'

class Categories extends Component {
  state = {
    closed: true,
    currentBackground: ''
  }

  addNewCategory = () => {
    this.handleClose()
    this.setState(() => ({
      closed: true
    }))
  }

  handleClose = () => {
    this.setState(() => ({
      closed: true
    }))
  }

  handleOpen = () => {
    this.setState(() => ({
      closed: false
    }))
  }

  setBackground = (gallery) => {
    const { galleries } = this.props

    if (galleries[gallery].image) {
      this.setState(() => ({
        currentBackground: galleries[gallery].image.fullpath
      }))
    }
  }

  render() {
    const { galleries } = this.props

    if (!this.state.currentBackground && Object.keys(this.props.galleries).length !== 0) {
      const key = Object.keys(this.props.galleries)[0]
      this.setBackground(key)
    }

    return (
      <div>
        <img
          src={getImgUrl(this.state.currentBackground)}
          style={{ backgroundColor: '#7b7b7b'}}
          className="bcg-image"
        />
        <div className="gallery-flex">
          {!this.state.closed &&
            <AddNewCategory
              onFormSubmit={this.addNewCategory}
              handleClose={this.handleClose} />
          }
          {Object.keys(galleries).map((gallery) => {
            return (
              <Category
                onMouseEnter={() => this.setBackground(gallery)}
                key={gallery}
                category={galleries[gallery].path}
                src={getImgUrl(galleries[gallery].image && galleries[gallery].image.fullpath)}
                path={gallery}
                name={galleries[gallery].path}
              />
            )
          })}
          <AddCategoryCard openForm={this.handleOpen} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ galleries }) => {
  return {
    galleries,
  }
}

export default connect(mapStateToProps, { handleGetPhotosForGallery })(Categories)






