# 📞Truecaller Search Bot

A Telegram bot that uses an unofficial Truecaller API to look up phone number information instantly. It's an alternative for occasional use of Truecaller than running their app in background all the time.

<br>
<div align="center"><img src=".doc/marquee.png" /><br>This bot is based on the <a href="https://github.com/sumithemmadi/truecallerjs">sumithemmadi/truecallerjs</a> library and is live at <a href="https://t.me/truecallerjs_bot">@truecallerjs_bot</a></div>

## Host

### Setup Telegram Bot

1. Create a new bot using [@BotFather](https://t.me/BotFather).
2. Copy the bot token, it will be needed during deploy and setting the webhook later.
3. Set the bot commands:

   ```plaintext
   login - Login to Truecaller
   installation_id - Login via existing token
   logout - Logout from Truecaller
   info - Information about the bot & installation_id
   ```

### Deno Deploy

1. [Fork](/../../fork) this repo on GitHub.
2. Create a [new Deno Deploy](https://docs.deno.com/deploy/getting_started/) App from the forked repo.
3. Add the `TG_THIS_BOT_TOKEN` and other Environment Variables from [.env.example](.env.example) file. You can skip adding the optional envs as they aren't critical to the service.
4. After a successful deployment, add a Deno KV Database to the App.
5. Copy the production url from Deno console and edit the following link replacing the `<...>` parts with your data and visit it from a browser.

   ```plaintext
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<YOUR_DENO_DEPLOY_URL>&allowed_updates=%5B%22message%22%5D
   ```
6. Verify if everything is set correctly.

   ```plaintext
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo
   ```

## Information

**Author:** Nissan Ahmed ([@ni554n](https://x.com/ni554n))

**Website:** [anissan.com](https://anissan.com)
<img src="https://ping.anissan.com/?repo=truecallerjs_bot" width="0" height="0" align="right">
