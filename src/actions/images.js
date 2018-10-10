import { getPhotos, deleteItem, addNewPhoto } from '../api'

export const GET_PHOTOS_FOR_GALLERY = "GET_PHOTOS_FOR_GALLERY"
export const GALLERY_IMAGES_LOADING = "GALLERY_IMAGES_LOADING"
export const DELETE_PHOTO = "DELETE_PHOTO"
export const ADD_PHOTO = "ADD_PHOTO"

export const galleryImagesLoading = () => ({
  type: GALLERY_IMAGES_LOADING
})

// GET PHOTOS
export const getPhotosForGallery = (photos) => ({
  type: GET_PHOTOS_FOR_GALLERY,
  photos
})

export const handleGetPhotosForGallery = (path) => {
  return (dispatch) => {
    dispatch(galleryImagesLoading())
    return getPhotos(path)
      .then((photos) => dispatch(getPhotosForGallery(photos)))
  }
}

// DELETE PHOTO
export const deletePhoto = (path) => ({
  type: DELETE_PHOTO,
  path
})

export const handleDeletePhoto = (path) => {
  return (dispatch) => {
    return deleteItem(path)
      .then(() => dispatch(deletePhoto(path)))
  }
}

// ADD PHOTO
export const addPhoto = (images) => ({
  type: ADD_PHOTO,
  images
})

export const handleAddPhoto = (image, path) => {
  return (dispatch) => {
    dispatch(galleryImagesLoading())
    return addNewPhoto(image, path)
      .then((response) => dispatch(addPhoto(response.uploaded)))
  }
}