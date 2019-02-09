export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

const PHOTO_REQUEST_LIMIT = 10;

let photosArr = [],
    photosOffset = 0;

function getMorePhotos(offset, count, dispatch, getState, success) {
    getState().feed.api.getPhotos(offset, count, r => {
            try {
                photosArr = photosArr.concat(r);
                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: photosArr,
                });
                success();
            } catch (e) {
                dispatch({
                    type: GET_PHOTOS_FAIL,
                    error: true,
                    payload: new Error(e),
                });
            }
        }
    );
}

const isEmpty = (a) => {
    return typeof (a) === 'undefined' || a === null;
};

export function getPhotos(offset, success) {
    return (dispatch, getState) => {
        let allowLoad = true;
        if (isEmpty(offset)) {
            photosOffset++;
        } else if (offset > photosOffset) {
            photosOffset = offset;
        } else {
            allowLoad = false;
        }
        if (allowLoad) {
            dispatch({
                type: GET_PHOTOS_REQUEST,
            });
            getMorePhotos(photosOffset, PHOTO_REQUEST_LIMIT, dispatch, getState, success);
        }

    };
}
