import unsplash from './unsplash';

const API_UNSPLASH = 'API_UNSPLASH';

export default {
    login: (type = API_UNSPLASH) => {
        switch (type) {
            case API_UNSPLASH:
                return unsplash.getAuthenticationUrl();
                break;
            default:

        }
    }
};