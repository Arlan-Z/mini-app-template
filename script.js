const data = document.getElementById("data");
window.onload = function() {
    // Инициализируем Telegram Web App
    Telegram.WebApp.ready();

    // Получаем initData
    const initData = Telegram.WebApp.initData;

    // Проверяем наличие initData
    if (initData) {
        // Отправляем initData на сервер для валидации
        fetch('https://velvety-creponne-ff8e17.netlify.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ initData })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Перенаправляем пользователя на домашнюю страницу
                alert('success');
            } else {
                // Обрабатываем ошибку
                alert('Ошибка авторизации: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при авторизации.');
        });
    } else {
        alert('initData отсутствует. Пожалуйста, попробуйте снова.');
    }
};