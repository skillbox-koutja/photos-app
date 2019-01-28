import unsplash, {API_UNSPLASH} from './unsplash';

const getQueryVariable = (variable) => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
};

export default {
    defaultType: API_UNSPLASH,
    apiType: null,
    signIn(type = API_UNSPLASH) {
        this.apiType = type;
        switch (type) {
            case API_UNSPLASH:
                unsplash.signIn();
                break;
            default:
                throw new Error('Invalid instance of api');
        }
    },
    getAuth() {
        switch (this.apiType) {
            case API_UNSPLASH:
                // Считываем GET-параметр code из URL
                const code = getQueryVariable('code');
                console.log(code, window.location.search);
                return {
                    code,
                };
            default:
                throw new Error('Invalid instance of api');
        }
    },
    userAuthentication(query, success, failure) {
        switch (this.apiType) {
            case API_UNSPLASH:
                unsplash.userAuthentication(query, success, failure);
                break;
            default:
                throw new Error('Invalid instance of api');
        }
    },
    getPhotos(dispatch) {
        switch (this.apiType) {
            case API_UNSPLASH:
                unsplash.getPhotos(0, 10, dispatch);
                break;
            default:
                throw new Error('Invalid instance of api');
        }
    },
    getMorePhotos(offset, count, dispatch) {

    }
};