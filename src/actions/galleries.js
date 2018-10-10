import {
  getAllGalleries,
  addNewGallery,
  deleteItem
} from '../api.js'

export const RECEIVE_GALLERIES = "RECEIVE_GALLERIES"
export const ADD_GALLERY = "ADD_GALLERY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const DELETE_PHOTO = "DELETE_PHOTO"

// RECEIVE DATA
export const receiveGalleries = (galleries) => ({
  type: RECEIVE_GALLERIES,
  galleries
})

export const handleReceiveGalleries = () => {
  return (dispatch) => {
    return getAllGalleries()
      .then((galleries) => dispatch(receiveGalleries(galleries)))
  }
}

// ADD NEW GALLERY
export const addGallery = (name) => ({
  type: ADD_GALLERY,
  name
})

export const handleAddGallery = (name) => {
  return (dispatch) => {
    return addNewGallery(name)
      .then(() => dispatch(addGallery(name)))
  }
}

// DELETE CATEGORY
export const deleteCategory = (path) => ({
  type: DELETE_CATEGORY,
  path
})

export const handleDeleteCategory = (path) => {
  return (dispatch) => {
    return deleteItem(path)
      .then(() => dispatch(deleteCategory(path)))
  }
}


