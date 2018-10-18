import React, { Component } from 'react'
import './category.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleDeleteCategory } from '../../actions/galleries'
import ProgressiveImage from 'react-progressive-image'
import placeholder from '../../resources/placeholder.png'

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
        <button onClick={() => this.props.handleDeleteCategory(this.props.category)}>X DELETE</button>
      </div>
    )
  }

  showNumOfPics = () => {
    const opacity = this.state.visible ? 1 : 0
    const { images } = this.props

    return (
      <p style={{ opacity }}>
        {images[this.props.path] ? images[this.props.path].length + ' photos' : 'No photos'}
      </p>
    )
  }
  
  render() {
    return (
      <div className="card" onMouseOver={this.showBtn} onMouseLeave={this.hideBtn} {...this.props}>
        <Link to={`/${this.props.path}/`} className="link-to-category">
          {this.props.src && 
            <ProgressiveImage src={this.props.src} placeholder={placeholder}>
              {src => <img src={src} alt="category" />}
            </ProgressiveImage>
          }
          <div className="category-title">
            <p>{this.props.category}<br/>
            {this.showNumOfPics()}
            </p>
            
          </div>
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