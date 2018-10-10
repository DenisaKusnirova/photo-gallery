import { 
  GET_PHOTOS_FOR_GALLERY,
  GALLERY_IMAGES_LOADING,
  DELETE_PHOTO,
  ADD_PHOTO
} from '../actions/images'

export const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PHOTOS_FOR_GALLERY:
      return {
        ...state,
        ...action.photos
      }
    case GALLERY_IMAGES_LOADING:
      return state
    case DELETE_PHOTO:
      return {
        ...state,
        images: state.images.filter((index) => index.fullpath !== action.path)
      }
    case ADD_PHOTO:
      return {
        ...state,
        images: [
          ...state.images,
          ...action.images
        ]
      }
  }
  return state;
}