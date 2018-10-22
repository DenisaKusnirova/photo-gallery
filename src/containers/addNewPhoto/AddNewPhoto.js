import React, { Component } from 'react'
import './addNewPhoto.scss'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { handleAddPhoto } from '../../actions/images'

class AddNewPhoto extends Component {
  state = {
    accepted: []
  }

  render() {
    return (
      <div className="add-new-photo-container">
        <div>
          <button onClick={this.props.handleClose} className="close-button">
            <img className="ic-close" src={require('../../resources/ic_close.svg')} alt="ic_close" />
            CLOSE
          </button>
          <div className="add-category-white-card">
            <h4>ADD NEW PHOTOS</h4>
            <div className="dropzone">
              <Dropzone
                className="inner-container"
                accept="image/jpeg"
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
              >
                <img src={require('../../resources/ic_add_photo.svg')} alt="ic_camera" className="camera-img"/>
                <p className="subheading">Drop some .jpeg images here to upload or</p>
                <button className="choose-files-btn">SELECT IMAGES</button>
              </Dropzone>
            </div>
            {this.state.accepted.length > 0 &&
              <div>
                <h4>ACCEPTED FILES:</h4>
                <ul>
                  {
                    this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                  }
                </ul>
              </div>
            }
            <button
              onClick={() => {
                this.state.accepted.map((image) => {
                  this.props.handleClose()
                  this.props.handleAddPhoto(image, this.props.path, this.props.category)
                })
              }}
              className="submit-btn">
                <img className="ic-add-category" src={require('../../resources/ic_button_add.svg')} alt="ic_button_add" />
                SAVE
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { handleAddPhoto })(AddNewPhoto)
