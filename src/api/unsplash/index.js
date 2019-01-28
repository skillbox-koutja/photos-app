import Unsplash, {toJson} from 'unsplash-js';

const {REACT_APP_UNSPLASH_ACCESS_KEY, REACT_APP_UNSPLASH_SECRET, REACT_APP_CALLBACK_URL} = process.env;

export const API_UNSPLASH = 'unsplash';

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    applicationId: REACT_APP_UNSPLASH_ACCESS_KEY,
    secret: REACT_APP_UNSPLASH_SECRET,
    callbackUrl: `${REACT_APP_CALLBACK_URL}/api-auth`
});

export default {
    signIn() {
        const authenticationUrl = unsplash.auth.getAuthenticationUrl([
            "public",
            "write_likes"
        ]);

        // Отправляем пользователя по этому адресу
        window.location.assign(authenticationUrl);
        // console.log({
        //     authenticationUrl,
        //     unsplash
        // });
    },
    userAuthentication(query, success, failure) {
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