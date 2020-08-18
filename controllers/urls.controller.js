const urlStatusCode = require('url-status-code');
const {urlServices: {getAllUrls, createURL}} = require(`../servicse`)
const  post = require(`../utils/post`)

module.exports = {
    getAllUrls: async (req, res) => {
        const urls = await getAllUrls();
        res.json(urls)
            .end()
    },

    createUrl: async (req, res, next) => {
        await createURL(req.body);
        res.end();
    },
}
