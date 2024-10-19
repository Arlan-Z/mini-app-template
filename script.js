const usernameElem = document.getElementById("username");
const url = "https://demo-pp-latest.onrender.com/auth/telegram";

window.onload = async function() {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        // Инициализируем Telegram Web App
        Telegram.WebApp.ready();

        // Получаем initData
        const initData = Telegram.WebApp.initData;
        const params = new URLSearchParams(initData);
        const userEncoded = params.get('user');

        // Декодируем URL-кодирование
        const userDecoded = decodeURIComponent(userEncoded);

        // Преобразуем декодированную строку в объект JSON
        const userObj = JSON.parse(userDecoded);

        // Получаем значение username
        const username = userObj.username;
        usernameElem.innerHTML = username;

        // Отправляем POST запрос с initData
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    initData: initData // Передаем initData в теле запроса
                })
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
            } else {
                console.error('Failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
};
