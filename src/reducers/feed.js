import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
} from '../actions/FeedActions';
import {SIGN_OUT_REQUEST} from '../actions/UserActions';

let initialState = {
    api: null,
    photos: [],
    error: '',
    isFetching: false,
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
                    error: ''
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
                    })
                };
            default:
                return state;
        }
    }
}