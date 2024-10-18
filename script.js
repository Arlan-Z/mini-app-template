const data = document.getElementById("data");

window.onload = function(){
    Telegram.WebApp.ready();
    const initData = Telegram.WebApp.initData;
    data.innerHTML = initData;
}