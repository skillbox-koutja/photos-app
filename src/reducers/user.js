import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT_REQUEST,
    TOGGLE_LIKE,
} from '../actions/UserActions';

let initialState = {
    api: null,
    profile: null,
    targetPhoto: null,
    error: '',
    isFetching: false,
};
export function createUserReducer(preloadedState) {
    initialState = {...initialState, ...preloadedState};
    return (state = initialState, action) => {
        switch (action.type) {

            case SIGN_IN_REQUEST:
                return {...state, isFetching: true, error: ''};

            case SIGN_IN_SUCCESS:
                return {...state, isFetching: false, profile: action.payload};

            case SIGN_IN_FAIL:
                return {...state, isFetching: false, error: action.payload.message};

            case SIGN_OUT_REQUEST:
                return {...state, isFetching: false, profile: null};

            case TOGGLE_LIKE:
                const targetPhoto = {...state.targetPhoto, ...action.payload};
                targetPhoto.liked_by_user = !targetPhoto.liked_by_user;
                return {
                    ...state,
                    targetPhoto

                };
            default:
                return state
        }
    }
}