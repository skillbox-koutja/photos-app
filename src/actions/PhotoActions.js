import {goBack, push} from 'connected-react-router';

export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const DESELECT_PHOTO = 'DESELECT_PHOTO';
export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST';
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const GET_PHOTO_FAIL = 'GET_PHOTO_FAIL';

export function getPhoto(id) {
  return function(dispatch, getState) {
    dispatch({
      type: GET_PHOTO_REQUEST,
    });
    getState().photo.api.getPhoto(id, r => {
      try {
        dispatch({
          type: GET_PHOTO_SUCCESS,
          payload: r,
        });
      } catch (e) {
        dispatch({
          type: GET_PHOTO_FAIL,
          error: true,
          payload: new Error(e),
        });
      }
    });
  };
}

export function toggleLike(photo) {
  return function(dispatch, getState) {
    getState().photo.api.toggleLike(photo);
    dispatch({
      type: TOGGLE_LIKE,
      payload: photo,
    });
  };
}

export function selectPhoto(photo) {
  return function(dispatch) {
    dispatch({
      type: SELECT_PHOTO,
      payload: photo,
    });
    dispatch(push(`/p/${photo.id}`));
  };
}

export function deselectPhoto(photo) {
  return function(dispatch) {
    dispatch({
      type: DESELECT_PHOTO,
      payload: photo,
    });
    dispatch(goBack());
  };
}
