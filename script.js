const data = document.getElementById("data");
window.onload = function() {
    // Инициализируем Telegram Web App
    Telegram.WebApp.ready();

    // Получаем initData
    const initData = Telegram.WebApp.initData;
    data.innerHTML = JSON.stringify(initData);
    // Проверяем наличие initData
    if (initData) {
        // Отправляем initData на сервер для валидации
        fetch('https://demo-pp.onrender.com/auth/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ initData })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
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