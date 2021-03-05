const fetch = require("sync-fetch");
const baseUrl = "https://api.cool-img-api.ml/";
class CoolImageAPI {
    constructor() {
        const endpoints = getEndpoints();
        const obj = {};
        for (const endpoint of endpoints) {
            const x = endpoint.replace('/', '').replace('-', '');
            obj[x] = function(params = {}) {
                params = paramsFromObj(params);
                const url = baseUrl + endpoint.slice(1) + params;
                const body = fetch(url);
                const contentType = body.headers.get("content-type");
                let err, res;
                if (contentType.startsWith("text/html")) {
                    err = body.text();
                } else {
                    res = contentType.startsWith("application/json") ? body.json() : body.buffer();
                }
                const promise = new Promise((resolve, reject) => {
                    if (err) return reject(err);
                    resolve(res);
                });
                return promise;
            }
        }
        Object.assign(this, obj);
    }
}

function getEndpoints() {
    const body = fetch(baseUrl + "endpoints").json();
    const res = body.map(x => x.split("?")[0]);
    return res;
}

function paramsFromObj(obj) {
    const entries = Object.entries(obj);
    if (!entries.length) return '';
    const res = entries.map((x, i) => (i ? '&' : '?') + x[0] + '=' + encodeURIComponent(x[1]));
    return res.join('');
}
module.exports = CoolImageAPI;
