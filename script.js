try {
    const usernameElem = document.getElementById("username");

    // Функция для отправки данных на сервер
    function sendData(initData) {
        const data = { initData };
        alert(JSON.stringify(data));
        fetch('https://demo-pp.onrender.com/auth/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include', // Если используете сессии
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data:', data);
            // Обработка ответа от сервера
        })
        .catch(error => {
            console.log(error);
            alert('Error: ' + error.message);
        });
    }

    const isLoggedIn = false;

    window.onload = async function() {
        if ((typeof Telegram !== "undefined" && Telegram.WebApp) && !isLoggedIn) {

            // Инициализируем Telegram Web App
            Telegram.WebApp.ready();

            // Получаем initData
            const initData = Telegram.WebApp.initData;
            const params = new URLSearchParams(initData);
            const userEncoded = params.get('user');

            if (userEncoded) {
                // Декодируем URL-кодирование
                const userDecoded = decodeURIComponent(userEncoded);

                // Преобразуем декодированную строку в объект JSON
                const userObj = JSON.parse(userDecoded);

                // Получаем значение username
                const username = userObj.username;

                // Если элемент с id "username" существует, обновляем его
                if (usernameElem) {
                    usernameElem.innerHTML = username;
                }

                // Отправляем данные на сервер
                sendData(initData);

            }
        }
    };
} catch (error) {
    alert("Everything is broken: " + error.message);
}
