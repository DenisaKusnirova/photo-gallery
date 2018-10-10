import React, { Component } from 'react'
import Categories from '../categories/Categories'
import './homepage.scss'
import Headers from '../headers/Headers'
import { connect } from 'react-redux'
import { handleReceiveGalleries } from '../../actions/galleries'

class Homepage extends Component {
  componentDidMount() {
    this.props.handleReceiveGalleries()
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

export default connect(null, { handleReceiveGalleries })(Homepage)