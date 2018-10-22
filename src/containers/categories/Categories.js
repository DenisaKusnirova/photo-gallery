import React, { Component } from 'react'
import './categories.scss'
import Category from '../category/Category'
import { connect } from 'react-redux'
import { getImgUrl } from '../../api'
import AddNewCategory from '../addNewCategory/AddNewCategory'
import AddCategoryCard from '../../components/addCategoryCard/AddCategoryCard'
import Grid from '@material-ui/core/Grid'

class Categories extends Component {
  state = {
    closed: true,
    currentBackground: ''
  }

  closeDetail = (e) => {
    if (e.keyCode === 27) {
      this.handleClose()
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.closeDetail)
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
        <div className="bcg-image-wrapper">
          <img
            src={this.state.currentBackground && getImgUrl(this.state.currentBackground, 1200, 800)}
            style={{ backgroundColor: '#7b7b7b' }}
            className="bcg-image"
            alt="background"
          />
        </div>
        {!this.state.closed &&
          <AddNewCategory
            onFormSubmit={this.addNewCategory}
            handleClose={this.handleClose} />
        }
        <Grid container spacing={24}>
          {Object.keys(galleries).map((gallery) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={gallery}>
              <Category
                onMouseEnter={() => this.setBackground(gallery)}
                category={galleries[gallery].path}
                src={getImgUrl(galleries[gallery].image && galleries[gallery].image.fullpath)}
                path={gallery}
                name={galleries[gallery].path}
              />
            </Grid>
          )
          )}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AddCategoryCard openForm={this.handleOpen} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ galleries }) => {
  return {
    galleries
  }
}

export default connect(mapStateToProps)(Categories)






