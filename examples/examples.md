# Setup
```js
const CoolImageApi = require("cool-image-api");
const api = new CoolImageApi();
```
# Meme 
```js
api.meme().then(meme => message.channel.send(new (Discord.MessageAttachment)(meme, "meme.png"));
```
# Random Captcha 
```js
api.randomcaptcha().then(data => message.channel.send(new (Discord.MessageAttachment)(data.image, "captcha.png"));
```
# Ship
```js
const user = message.author.displayAvatarURL({ format: "png" });
const user2 = message.mentions.users.first();
api.ship({ user, user2 }).then(buffer => message.channel.send(new (Discord.MessageAttachment)(buffer, "ship.png"));
```
*More coming soon*
