import Unsplash, {toJson} from 'unsplash-js';
import getQueryVariable from '../../lib/getQueryVariable';

const {REACT_APP_UNSPLASH_ACCESS_KEY, REACT_APP_UNSPLASH_SECRET, REACT_APP_CALLBACK_URL} = process.env;

export const API_UNSPLASH = 'unsplash';

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    applicationId: REACT_APP_UNSPLASH_ACCESS_KEY,
    secret: REACT_APP_UNSPLASH_SECRET,
    callbackUrl: `${REACT_APP_CALLBACK_URL}/api-auth`
});

export default {
    type: API_UNSPLASH,
    signIn() {
        const authenticationUrl = unsplash.auth.getAuthenticationUrl([
            "public",
            "write_likes"
        ]);
        console.log({
            authenticationUrl,
            unsplash
        });
        // Отправляем пользователя по этому адресу
        window.location.assign(authenticationUrl);
    },
    getAuth() {
        // Считываем GET-параметр code из URL
        const code = getQueryVariable('code');
        console.log(code, window.location.search);
        return {
            code,
        };
    },
    userAuthentication(query, success, failure) {
        console.log({
            fn: 'userAuthentication',
            unsplash,
            query,
            success,
            failure
        });
        unsplash.auth.userAuthentication(query.code)
            .then(toJson)
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);

                unsplash.currentUser.profile()
                    .then(toJson)
                    .then(profile => {
                        success(profile);
                    });
            })
            .catch(failure);
    },
    getPhotos(offset, count, dispatch) {
        unsplash.photos.listPhotos(offset, count, 'latest')
            .then(toJson)
            .then(json => {
                dispatch({
                    payload: json,
                });
            });
    }
};