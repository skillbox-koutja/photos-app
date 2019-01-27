import Unsplash from 'unsplash-js';

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    applicationId: "{UNSPLASH_ACCESS_KEY}",
    secret: "{UNSPLASH_SECRET}",
    callbackUrl: "{CALLBACK_URL}/auth"
});

export default {
    getAuthenticationUrl: () => {
        console.log({unsplash});
        /*const authenticationUrl = unsplash.auth.getAuthenticationUrl([
            "public",
            "write_likes"
        ]);

        // Отправляем пользователя по этому адресу
        window.location.assign(authenticationUrl);*/
    }
};