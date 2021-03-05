# cool-image-api
The official api wrapper for https://api.cool-img-api.ml/
# Installing
`npm i cool-image-api`
# Start Up
```js
const CoolImageApi = require("cool-image-api");
const api = new CoolImageApi();
api.birb().then(console.log);
```
# Quick weather card example
```js
api.weathercard({ location: "new york" }).then(buffer => {
  const attachment = new Discord.MessageAttachment(buffer, "weather.png");
  message.channel.send(attachment);
});
```
# See also
- [Support Server](https://discord.com/invite/xr2qrzMTRA)
- [Documentation](https://github.com/coolImageAPI/cool-image-api/blob/main/docs/documentation.md)
- [More examples](https://github.com/coolImageAPI/cool-image-api/blob/main/examples/examples.md)
- [Github](https://github.com/coolImageAPI/cool-image-api/)
