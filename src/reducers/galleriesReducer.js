import { 
  RECEIVE_GALLERIES,
  ADD_GALLERY,
  DELETE_CATEGORY,
  DELETE_PHOTO,
} from '../actions/galleries'

export const galleriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GALLERIES:
      return {
        ...state,
        ...action.galleries.reduce((galleries, item) => {
          galleries[item.path] = item
          return galleries;
        }, {})
      }
    case ADD_GALLERY:
      return {
        ...state,
        [action.name]: {
          path: action.name,
          images: {},
          name: action.path
         }
      }
    case DELETE_CATEGORY:
      console.log("STATE:", state)
      const { [action.path]: {}, ...newState } = state
      return newState    
  }
  return state;
}