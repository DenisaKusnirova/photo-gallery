import React, { Component } from 'react'
import './categoryDetailPage.scss'
import { connect } from 'react-redux'
import Photo from '../photo/Photo'
import AddPhotoCard from '../addPhotoCard/AddPhotoCard'
import Headers from '../headers/Headers'
import AddNewPhoto from '../addNewPhoto/AddNewPhoto'
import PhotoDetail from '../photoDetail/PhotoDetail'
import { handleGetPhotosForGallery } from '../../actions/images'
import { getImgUrl } from '../../api'

class CategoryDetailPage extends Component {
  state = {
    closed: true,
    photoDetailClosed: true,
    currentIndex: 0
  }

  componentDidMount() {
    this.props.handleGetPhotosForGallery(this.props.path)
  }

  getBackgroundImg = () => {
    const { images } = this.props.data
    if (images && images.length !== 0) {
      return <img src={getImgUrl(images[0].fullpath)} className="bcg-image" alt="background" />
    }
    return <div className="no-bcg-image"></div>
  }

  addNewCategory = (e) => {
    e.preventDefault()
    this.setState(() => ({
      closed: true
    }))
  }

  handleOpen = () => {
    this.setState(() => ({
      closed: false
    }))
  }

  handleOpenDetail = (path) => {
    this.setState(() => ({
      photoDetailClosed: false
    }))
  }

  handleClose = () => {
    this.setState(() => ({
      closed: true
    }))
  }

  handleCloseDetail = () => {
    this.setState(() => ({
      photoDetailClosed: true
    }))
  }

  handleClick = (index) => {
    this.handleOpenDetail()
    this.setState(() => ({
      currentIndex: index
    }))
  }

  renderPreviousPhoto = () => {
    if (this.state.currentIndex > 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1
      }))
    }
  }

  renderNextPhoto = () => {
    if (this.state.currentIndex < this.props.data.images.length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1
      }))
    }
  }

  render() {
    const { path, data } = this.props
    const { currentIndex } = this.state

    return (
      <div>
        {!this.state.closed && <AddNewPhoto path={path} handleClose={this.handleClose} />}
        {!this.state.photoDetailClosed &&
          <PhotoDetail
            photoPath={
              data.images[currentIndex] &&
              getImgUrl(data.images[currentIndex].fullpath, 1200, 800)
            }
            renderPrevious={this.renderPreviousPhoto}
            renderNext={this.renderNextPhoto}
            handleCloseDetail={this.handleCloseDetail}
          />
        }
        {this.getBackgroundImg()}
        <div className="homepage-container">
          <Headers subheader={"← " + path.toUpperCase()} className="subheader-link" />
          <div className="gallery">
            <div className="gallery-flex">
              {data.images && data.images.length > 0 &&
                data.images.map((item, index) => {
                  return (
                    <Photo
                      onClick={() => this.handleClick(index)}
                      src={getImgUrl(item.fullpath)}
                      key={item.path}
                      category={path}
                      path={item.fullpath}
                    />
                  )
                })}
              <AddPhotoCard addPhoto={this.handleOpen} />
            </div>
            <p className="webdesign">webdesign bart.sk</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ images }, props) => {
  const { path } = props.match.params

  return {
    path,
    data: images
  }
}

export default connect(mapStateToProps, { handleGetPhotosForGallery })(CategoryDetailPage)