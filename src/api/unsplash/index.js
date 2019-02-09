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
        window.location.assign(authenticationUrl);
    },
    getAuth() {
        // Считываем GET-параметр code из URL
        const code = getQueryVariable('code');
        return {
            code,
        };
    },
    userAuthentication(query, success, failure) {
        unsplash.auth.userAuthentication(query.code)
            .then(toJson)
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);

                unsplash.currentUser.profile()
                    .then(toJson)
                    .then(profile => success(profile));
            })
            .catch(failure);
    },
    getPhotos(offset, count, success) {
        unsplash.photos.listPhotos(offset, count, 'latest')
            .then(toJson)
            .then(photos => success(photos));
    },
    toggleLike(photo, success) {
        const method = photo.liked_by_user ? 'unlikePhoto': 'likePhoto';
        unsplash.photos[method](photo.id)
            .then(toJson)
            .then(photo => success(photo));
    },
    getPhoto(id, success) {
        unsplash.photos.getPhoto(id)
            .then(toJson)
            .then(photo => success(photo));
    }
};