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
import Grid from '@material-ui/core/Grid'

class CategoryDetailPage extends Component {
  state = {
    closed: true,
    photoDetailClosed: true,
    currentIndex: 0
  }

  closeDetail = (e) => {
    if (e.keyCode === 27) {
      this.handleCloseDetail()
      this.handleClose()
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
    document.addEventListener("keydown", this.closeDetail)
    document.addEventListener("keydown", this.nextPhoto)
    document.addEventListener("keydown", this.previousPhoto)
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
        <div className="bcg-image-wrapper">
          {this.getBackgroundImg()}
        </div>
        <div className="homepage-container">
          <Headers 
            image={<img src={require('../../resources/ic_back.svg')} alt="ic_back" className="ic_back"/>}
            subheader={path.toUpperCase()} className="subheader-link" 
          />
          <div className="gallery">
            <div className="gallery-flex">
              <Grid container spacing={24}>
                {images[path] && images[path].length > 0 &&
                  images[path].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.path}>
                      <Photo
                        onClick={() => this.handleClick(index)}
                        src={getImgUrl(item.fullpath)}
                        key={item.path}
                        category={path}
                        path={item.fullpath}
                      />
                    </Grid>
                  ))
                }
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <AddPhotoCard addPhoto={this.handleOpen} />
                </Grid>
              </Grid>
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