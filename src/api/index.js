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
    signIn: (type = API_UNSPLASH) => {
        switch (type) {
            case API_UNSPLASH:
                unsplash.signIn();
                break;
            default:
                throw new Error('Invalid instance of api');
        }
    },
    getAuth: (type = API_UNSPLASH) => {
        switch (type) {
            case API_UNSPLASH:
                // Считываем GET-параметр code из URL
                const code = getQueryVariable('code');
                const api = getQueryVariable('api');
                console.log(code, api, window.location.search);
                return {
                    code,
                    api
                };
            default:
                throw new Error('Invalid instance of api');
        }
    }
};