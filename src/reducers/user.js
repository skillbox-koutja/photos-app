import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT_REQUEST,
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

            default:
                return state
        }
    }
}