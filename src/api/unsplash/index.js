import Unsplash from 'unsplash-js';

const {REACT_APP_UNSPLASH_ACCESS_KEY, REACT_APP_UNSPLASH_SECRET, REACT_APP_CALLBACK_URL} = process.env;

export const API_UNSPLASH = 'unsplash';

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    applicationId: REACT_APP_UNSPLASH_ACCESS_KEY,
    secret: REACT_APP_UNSPLASH_SECRET,
    callbackUrl: `${REACT_APP_CALLBACK_URL}/auth?api=unsplash`
});

export default {
    login: () => {
        console.log({unsplash});
        const authenticationUrl = unsplash.auth.getAuthenticationUrl([
            "public",
            "write_likes"
        ]);

        // Отправляем пользователя по этому адресу
        window.location.assign(authenticationUrl);
    }
};