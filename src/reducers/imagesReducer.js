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
        [action.photos.gallery.name]: action.photos.images
      }
    case GALLERY_IMAGES_LOADING:
      return state
    case DELETE_PHOTO:
      return {
        ...state,
        [action.category]: state[action.category].filter((index) => index.fullpath !== action.path)
      }
    case ADD_PHOTO:
      return {
        ...state,
        [action.category]: [
          ...state[action.category],
          ...action.image
        ]
      }
    default:
      return state
  }
}