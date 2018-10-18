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
          <button onClick={this.props.handleClose} className="close-btn">X ZAVRIEŤ</button>
          <div className="add-category-white-card">
            <h4>PRIDAŤ FOTKY</h4>
            <div className="dropzone">
              <Dropzone
                className="inner-container"
                accept="image/jpeg"
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
              >
                <img src={require('../../resources/camera-icon.png')} alt="camera" />
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
              className="submit-btn">+ SAVE</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { handleAddPhoto })(AddNewPhoto)
