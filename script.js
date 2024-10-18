const data = document.getElementById("data");

window.onload = async function() {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        // Инициализируем Telegram Web App
        Telegram.WebApp.ready();

        // Получаем initData
        const initData = Telegram.WebApp.initData;
        data.innerHTML = JSON.stringify(initData);

        // Проверяем наличие initData
        if (initData) {
            try {
                // Отправляем initData на сервер для валидации
                const response = await fetch('https://demo-pp.onrender.com/auth/telegram', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ initData })
                });

                const result = await response.json();

                if (result.success) {
                    alert('success');
                } else {
                    // Обрабатываем ошибку
                    alert('Ошибка авторизации: ' + result.message);
                }
            } catch (error) {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при авторизации.');
            }
        } else {
            alert('initData отсутствует. Пожалуйста, попробуйте снова.');
        }
    } else {
        alert('Скрипт должен выполняться в Telegram Web App.');
    }
};
