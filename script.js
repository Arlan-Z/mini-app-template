const usernameElem = document.getElementById("username");

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

        // Отправляем данные на сервер
        sendData(initData);
    }
};

function sendData(initData) {
    const data = { initData }; // Используем фактическое initData, переданное из Telegram

    fetch('https://demo-pp.onrender.com/auth/telegram', {
        method: 'POST',
        mode: 'no-cors', // Используем no-cors для тестирования
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => alert('Request succeeded:', response))
    .catch(error => alert('Error:', error));
}
