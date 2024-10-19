try{
const usernameElem = document.getElementById("username");
initData = {"initData":"user=%7B%22id%22%3A1309966182%2C%22first_name%22%3A%22Arlan%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Nearlan%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=3339528180163683006&chat_type=sender&auth_date=1729262581&hash=83bce350a0ef670d3d7e4ff73fd9bb242471958b8579697b755aeb2865b91598"}
sendData(initData);
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
        alert("sending");
        // sendData(initData);
    }
};

function sendData(initData) {
    const data = { initData };
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
        alert.error('Error:', error);
        alert('Error: ' + error.message);
    });
}
} catch(error){
    alert("Everything is broken: ", error);
}