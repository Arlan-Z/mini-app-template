const data = document.getElementById("data");

window.onload = async function() {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        Telegram.WebApp.ready();

        const initData = Telegram.WebApp.initData;
        data.innerHTML = initData; //  <--  Здесь тоже не нужно JSON.stringify, initData уже строка

        if (initData) {
            try {
                const response = await fetch('https://demo-pp.onrender.com/auth/telegram', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ initData: JSON.parse(initData) }) // <--  Парсим initData перед отправкой
                });

                const result = await response.json();

                if (result.success) {
                    alert('success');
                } else {
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