import {GET_PHOTOS_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../actions/FeedActions';
import {SIGN_OUT_REQUEST} from '../actions/UserActions';
import {TOGGLE_LIKE} from '../actions/PhotoActions';

let initialState = {
  api: null,
  photos: [],
  error: '',
  isFetching: false,
};
const toggleLikePhotoReducer = function(state, action) {
  let photo = state.photos.find(photo => {
    return photo.id === action.payload.id;
  });
  if (photo) {
    photo.liked_by_user = !photo.liked_by_user;
    photo.liked_by_user ? ++photo.likes : --photo.likes;
  }
  return state;
};

export function createFeedReducer(preloadedState) {
  initialState = {...initialState, ...preloadedState};
  return (state = initialState, action) => {
    switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        isFetching: false,
        error: '',
      };
    case GET_PHOTOS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message,
      };
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        photos: state.photos.map(photo => {
          photo.liked_by_user = false;
          return photo;
        }),
      };
    case TOGGLE_LIKE:
      return toggleLikePhotoReducer(state, action);
    default:
      return state;
    }
  };
}
