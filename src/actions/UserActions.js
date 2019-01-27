import api from '../api';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export const SIGN_OUT_REQUEST = 'SIGN_IN_REQUEST';

export function handleSignIn(apiType, successCallback) {
    return function (dispatch) {
        dispatch({
            type: SIGN_IN_REQUEST,
        });

        api.signIn(apiType, response => {
            console.log(response);
            if (response.session) {
                const username = response.session.user.first_name;
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: username,
                });
                successCallback();
            } else {
                dispatch({
                    type: SIGN_IN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации'),
                });
            }
        }, 4) // запрос прав на доступ к photo
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