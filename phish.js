const phish = () => {
    $('#submit-button').on('click', function() {
        let login = $('#username').val(),
            pass = $('#password').val();
        console.log(`${login}: ${pass}`);
    });
};
