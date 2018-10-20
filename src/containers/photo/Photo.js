import React, { Component } from 'react'
import './photo.scss'
import { connect } from 'react-redux'
import { handleDeletePhoto } from '../../actions/images'
import ProgressiveImage from 'react-progressive-image'
import placeholder from '../../resources/gallery_placeholder.png'
import AspectRatio from 'react-aspect-ratio'

class Photo extends Component {
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
        <button onClick={() => this.props.handleDeletePhoto(this.props.path, this.props.category)}>X DELETE</button>
      </div>
    )
  }

  render() {
    return (
      <AspectRatio ratio="1.2">
        <div className="card-photo" onMouseOver={this.showBtn} onMouseLeave={this.hideBtn}>
        <div {...this.props}>
          {this.props.src &&
            <ProgressiveImage src={this.props.src} placeholder={placeholder}>
              {src => <img src={src} alt="gallery jpg" />}
            </ProgressiveImage>
          }
          </div>
          {this.renderDeleteButton()}
        </div>
      </AspectRatio>
    )
  }
}

export default connect(null, { handleDeletePhoto })(Photo)