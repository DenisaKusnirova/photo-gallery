import React, { Component } from 'react'
import './categoryDetailPage.scss'
import { connect } from 'react-redux'
import Photo from '../photo/Photo'
import AddPhotoCard from '../../components/addPhotoCard/AddPhotoCard'
import Headers from '../../components/headers/Headers'
import AddNewPhoto from '../../containers/addNewPhoto/AddNewPhoto'
import PhotoDetail from '../../components/photoDetail/PhotoDetail'
import { handleGetPhotosForGallery } from '../../actions/images'
import { getImgUrl } from '../../api'

class CategoryDetailPage extends Component {
  state = {
    closed: true,
    photoDetailClosed: true,
    currentIndex: 0
  }

  closeDetail = (e) => {
    if (e.keyCode === 27) {
      this.handleCloseDetail()
    }
  }

  nextPhoto = (e) => {
    if (e.keyCode === 39) {
      this.renderNextPhoto()
    }
  }

  previousPhoto = (e) => {
    if (e.keyCode === 37) {
      this.renderPreviousPhoto()
    }
  }

  componentDidMount() {
    this.props.handleGetPhotosForGallery(this.props.path)
    document.addEventListener("keydown", this.closeDetail, false)
    document.addEventListener("keydown", this.nextPhoto, false)
    document.addEventListener("keydown", this.previousPhoto, false)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false)
    document.removeEventListener("keydown", this.nextPhoto, false)
    document.removeEventListener("keydown", this.previousPhoto, false)
  }

  getBackgroundImg = () => {
    const { images, path } = this.props
    if (images[path] && images[path].length !== 0) {
      return <img src={getImgUrl(images[path][0].fullpath)} className="bcg-image" alt="background" />
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
    if (this.state.currentIndex < this.props.images[this.props.path].length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1
      }))
    }
  }

  render() {
    const { path, images } = this.props
    const { currentIndex } = this.state
    console.log('IMAGES:', images[path])

    return (
      <div>
        {!this.state.closed && <AddNewPhoto path={path} category={path} handleClose={this.handleClose} />}
        {!this.state.photoDetailClosed &&
          <PhotoDetail
            photoPath={
              images[path][currentIndex] &&
              getImgUrl(images[path][currentIndex].fullpath, 1200, 800)
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
              {images[path] && images[path].length > 0 &&
                images[path].map((item, index) => {
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
    images
  }
}

export default connect(mapStateToProps, { handleGetPhotosForGallery })(CategoryDetailPage)