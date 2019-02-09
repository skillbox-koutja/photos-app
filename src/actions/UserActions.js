import {push} from 'connected-react-router';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export const SIGN_OUT_REQUEST = 'SIGN_IN_REQUEST';


export function handleAuthComplete(query) {
    return function (dispatch, getState) {
        getState().user.api.userAuthentication(
            query,
            user => {
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: user,
                });
                dispatch(push('/'));
            },
            () => {
                dispatch({
                    type: SIGN_IN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации'),
                });
            },
        );
    }
}

export function handleSignIn(api) {
    return function (dispatch, getState) {
        getState().user.api.signIn(dispatch);
    }
}

export function handleSignOut(successCallback) {
    return function (dispatch) {
        dispatch({
            type: SIGN_OUT_REQUEST,
        });
        successCallback();
    }
}