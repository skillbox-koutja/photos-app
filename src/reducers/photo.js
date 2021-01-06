import {
  DESELECT_PHOTO,
  GET_PHOTO_FAIL,
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  SELECT_PHOTO,
  TOGGLE_LIKE,
} from '../actions/PhotoActions';

let initialState = {
  api: null,
  target: null,
  isLoading: false,
  error: null,
};

const getPhotoRequestReducer = function(state) {
  return {
    ...state,
    isLoading: true,
    error: null,
    target: null,
  };
};
const getPhotoSuccessReducer = function(state, action) {
  return {
    ...state,
    isLoading: false,
    target: action.payload,
  };
};
const getPhotoFailReducer = function(state, action) {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};
const selectPhotoReducer = function(state, action) {
  return {
    ...state,
    target: action.payload,
  };
};
const deselectPhotoReducer = function(state) {
  return {
    ...state,
    ...{target: null},
  };
};

export function createPhotoReducer(preloadedState) {
  initialState = {...initialState, ...preloadedState};
  return (state = initialState, action) => {
    switch (action.type) {
    case GET_PHOTO_REQUEST:
      return getPhotoRequestReducer(state);
    case GET_PHOTO_SUCCESS:
      return getPhotoSuccessReducer(state, action);
    case GET_PHOTO_FAIL:
      return getPhotoFailReducer(state, action);
    case SELECT_PHOTO:
      return selectPhotoReducer(state, action);
    case DESELECT_PHOTO:
      return deselectPhotoReducer(state);
    case TOGGLE_LIKE:
      const photo = action.payload;
      if (photo) {
        photo.liked_by_user = !photo.liked_by_user;
        photo.liked_by_user ? ++photo.likes : --photo.likes;
      }
      return {
        ...state,
      };
    default:
      return state;
    }
  };
}
