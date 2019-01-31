export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

let photosArr = [];
let cached = false;

function getMorePhotos(offset, count, dispatch, getState) {
    getState().feed.api.getPhotos(offset, count, r => {
            try {
                photosArr = photosArr.concat(r.response.items);
                if (offset <= r.response.count) {
                    offset += 1; // максимальное количество фото которое можно получить за 1 запрос
                    getMorePhotos(offset, count, dispatch, getState)
                } else {
                    cached = true;
                    dispatch({
                        type: GET_PHOTOS_SUCCESS,
                        payload: photosArr,
                    })
                }
            } catch (e) {
                dispatch({
                    type: GET_PHOTOS_FAIL,
                    error: true,
                    payload: new Error(e),
                })
            }
        }
    )
}

export function getPhotos() {
    return (dispatch, getState) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
        });

        if (cached) {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: photosArr,
            })
        } else {
            getMorePhotos(0, 10, dispatch, getState)
        }
    }
}
