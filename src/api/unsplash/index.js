import Unsplash, {toJson} from 'unsplash-js';
import getQueryVariable from '../../lib/getQueryVariable';

const {REACT_APP_UNSPLASH_ACCESS_KEY, REACT_APP_UNSPLASH_SECRET, REACT_APP_CALLBACK_URL} = process.env;

export const API_UNSPLASH = 'unsplash';

const ACCESS_TOKEN_KEY = 'unsplash_access_token';
const USER_PROFILE_KEY = 'unsplash_user_profile';

const readAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY) || null;
};
const saveAccessToken = (token) => {
  unsplash.auth.setBearerToken(token);
  if (token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  } else {
    clearLocaleStorage();
  }
  return this;
};
const clearLocaleStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(USER_PROFILE_KEY);
};
const saveUserProfile = (profile) => {
  if (profile) {
    profile = JSON.stringify(profile);
    localStorage.setItem(USER_PROFILE_KEY, profile);
  } else {
    localStorage.removeItem(USER_PROFILE_KEY);
  }
  return this;
};

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
  accessKey: REACT_APP_UNSPLASH_ACCESS_KEY,
  secret: REACT_APP_UNSPLASH_SECRET,
  callbackUrl: `${REACT_APP_CALLBACK_URL}/api-auth`,
});

const token = readAccessToken();
if (token) {
  unsplash.auth.setBearerToken(token);
}

const api = {
  type: API_UNSPLASH,
  signIn() {
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      'public',
      'write_likes',
    ]);
    window.location.assign(authenticationUrl);
  },
  signOut() {
    saveAccessToken(null);
  },
  getAuth() {
    // Считываем GET-параметр code из URL
    const code = getQueryVariable('code');
    return {
      code,
    };
  },
  isAuthorizedUser() {
    return readAccessToken() || false;
  },
  getUserProfile() {
    let profile = localStorage.getItem(USER_PROFILE_KEY);
    try {
      profile = profile && JSON.parse(profile);
    } catch (e) {
      //
    }
    return profile;
  },
  userAuthentication(query, success, failure) {
    unsplash.auth.userAuthentication(query.code)
      .then(toJson)
      .then(json => {
        saveAccessToken(json.access_token);
        unsplash.currentUser.profile()
          .then(toJson)
          .then(profile => {
            saveUserProfile(profile);
            success(profile);
          });
      })
      .catch(failure);
  },
  getPhotos(offset, count, success) {
    unsplash.photos.listPhotos(offset, count, 'latest')
      .then(toJson)
      .then(photos => success(photos));
  },
  toggleLike(photo) {
    const method = photo.liked_by_user ? 'unlikePhoto' : 'likePhoto';
    unsplash.photos[method](photo.id);
  },
  getPhoto(id, success) {
    unsplash.photos.getPhoto(id)
      .then(toJson)
      .then(photo => success(photo));
  },
};

export default api;
