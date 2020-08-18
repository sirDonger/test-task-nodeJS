const urlStatusCode = require('url-status-code')
const url = 'https://www.npmjs.com'

async function  a(url) {
    await urlStatusCode(url, (error, statusCode) => {
        if (error) {
            console.error(error)
        } else {
            console.log(statusCode)
        }
    })
}
const promise = a(url);
console.log(promise);
