import React, { Component } from 'react'
import './category.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleDeleteCategory } from '../../actions/galleries'
import ProgressiveImage from 'react-progressive-image'
import placeholder from '../../resources/gallery_placeholder.png'
import 'react-aspect-ratio/aspect-ratio.css'
import AspectRatio from 'react-aspect-ratio'

class Category extends Component {
  state = {
    visible: false
  }

  showBtn = () => {
    this.setState(() => ({
      visible: true
    }))
  }

  hideBtn = () => {
    this.setState(() => ({
      visible: false
    }))
  }

  renderDeleteButton = () => {
    const opacity = this.state.visible ? 1 : 0
    return (
      <div className="delete-button" style={{ opacity }}>
        <button onClick={() => this.props.handleDeleteCategory(this.props.category)}>
          X DELETE
        </button>
      </div>
    )
  }

  showNumOfPics = () => {
    const images = this.props.images[this.props.path]

    if (images && images.length === 1) {
      return (
        <p style={{ color: '#aaaaaa' }} className="num-of-pics">1 photo</p>
      )
    } else if (images && images.length > 1) {
      return (
        <p style={{ color: '#aaaaaa' }} className="num-of-pics">
          {images.length + ' photos'}
        </p>
      )
    } else return (
      <p style={{ color: '#aaaaaa' }} className="num-of-pics">No photos</p>
    )
  }

  render() {
    return (
      <div className="card-container" onMouseOver={this.showBtn} onMouseLeave={this.hideBtn} onMouseEnter={this.props.onMouseEnter}>
        <Link to={`/${this.props.path}/`} className="link-to-category">
          <AspectRatio ratio="1.2">
            <div className="card">
              {this.props.src &&
                <ProgressiveImage src={this.props.src} placeholder={placeholder}>
                  {src => <img src={src} alt="category" />}
                </ProgressiveImage>
              }
              <div className="card-footer">
                <h4 className="category-title">{this.props.category.toUpperCase()}</h4>
                {this.state.visible && this.showNumOfPics()}
              </div>
            </div>
          </AspectRatio>
        </Link>
        {this.renderDeleteButton()}
      </div>
    )
  }
}

const mapStateToProps = ({ images }) => {
  return {
    images
  }
}

export default connect(mapStateToProps, { handleDeleteCategory })(Category)