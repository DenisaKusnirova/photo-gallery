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
  
  render() {
    return (
      <div className="card" onMouseOver={this.showBtn} onMouseLeave={this.hideBtn} {...this.props}>
        <Link to={`/${this.props.path}/`} className="link-to-category">
          {this.props.src && 
            <ProgressiveImage src={this.props.src} placeholder={placeholder}>
              {src => <img src={src} alt="an image" />}
            </ProgressiveImage>
          }
          <p className="category-title">{this.props.category}</p>
        </Link>
        {this.renderDeleteButton()}
      </div>
    )
  }
}

export default connect(null, { handleDeleteCategory })(Category)