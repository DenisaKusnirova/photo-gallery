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
    galleryImagesLoading()
    return getPhotos(path)
      .then((photos) => dispatch(getPhotosForGallery(photos)))
  }
}

// DELETE PHOTO
export const deletePhoto = (path, category) => ({
  type: DELETE_PHOTO,
  path,
  category
})

export const handleDeletePhoto = (path, category) => {
  return (dispatch) => {
    return deleteItem(path)
      .then(() => dispatch(deletePhoto(path, category)))
  }
}

// ADD PHOTO
export const addPhoto = (image, category) => ({
  type: ADD_PHOTO,
  image,
  category
})

export const handleAddPhoto = (image, path, category) => {
  return (dispatch) => {
    galleryImagesLoading()
    return addNewPhoto(image, path)
      .then((response) => dispatch(addPhoto(response.uploaded, category)))
  }
}