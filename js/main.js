let form = document.querySelector("form");
let btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    location.assign("https://t.me/+VxAsrZMCz-kzYzAy")
})

// ---------- CHAT ----------
let CHAT_ID = "-1002193458128";
let TOKEN = "7440990314:AAG2tywwK1zqQNSQNRoTkJd61jCEXugR7VY";
let CHAT_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

form.addEventListener('submit', evt => {
    evt.preventDefault();

    let message = `<b>Tasdiqlandi✅</b>\n`;
    message += `<b>Foydalanuvchi 👨‍💻: ${evt.target.username.value}</b>\n`;
    message += `<b>Foydalanuvchi Izohi: ${evt.target.userComment.value}</b>`;

    axios.post(CHAT_URL, {
        chat_id: CHAT_ID,
        parse_mode: "HTML",
        text: message
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    });
});