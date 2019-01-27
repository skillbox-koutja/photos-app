import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT_REQUEST,
} from '../actions/UserActions'

const initialState = {
    name: '',
    error: '',
    isFetching: false,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {...state, isFetching: true, error: ''};

        case SIGN_IN_SUCCESS:
            return {...state, isFetching: false, name: action.payload};

        case SIGN_IN_FAIL:
            return {...state, isFetching: false, error: action.payload.message};

        case SIGN_OUT_REQUEST:
            return {...state, isFetching: false, error: action.payload.message};

        default:
            return state
    }
}