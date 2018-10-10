import { combineReducers } from 'redux'
import { galleriesReducer } from './galleriesReducer'
import { imagesReducer } from './imagesReducer'

export default combineReducers({
  galleries: galleriesReducer,
  images: imagesReducer
})