import React, { Component } from 'react'
import Categories from '../../containers/categories/Categories'
import './homepage.scss'
import Headers from '../../components/headers/Headers'
import { connect } from 'react-redux'
import { handleReceiveGalleries } from '../../actions/galleries'
import { handleGetPhotosForGallery } from '../../actions/images'

class Homepage extends Component {
  componentDidMount() {
    this.props.handleReceiveGalleries()
      .then(() => {
        Object.keys(this.props.galleries).map((gallery) => {
          return this.props.handleGetPhotosForGallery(gallery)
        })
      })
  }

  render() {
    return (
      <div className="homepage-container">
        <Headers subheader="CATEGORIES" className="subheader-link-disabled" />
        <div className="gallery">
          <Categories />
          <p className="webdesign">webdesign bart.sk</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ galleries }, { images }) => {
  return {
    galleries,
    images
  }
}

export default connect(mapStateToProps, { handleReceiveGalleries, handleGetPhotosForGallery })(Homepage)