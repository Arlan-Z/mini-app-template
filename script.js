const usernameElem = document.getElementById("username");

window.onload = async function() {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        // Инициализируем Telegram Web App
        Telegram.WebApp.ready();

        // Получаем initData
        const initData = Telegram.WebApp.initData;
        alert(JSON.stringify(initData)); // Логируем для проверки данных
        const params = new URLSearchParams(initData);
        const userEncoded = params.get('user');

        // 2. Декодируем URL-кодирование
        const userDecoded = decodeURIComponent(userEncoded);

        // 3. Преобразуем декодированную строку в объект JSON
        const userObj = JSON.parse(userDecoded);

        // 4. Получаем значение username
        const username = userObj.username;

        usernameElem.innerHTML = username;
    }
};
