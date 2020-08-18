const urlStatusCode = require('url-status-code')

const {
    workerServices: {createWorker, findWroker, updateWorker},
} = require(`../servicse`);

const {getAllUrls} = require("../servicse/urls.service");

module.exports = {
    createWorker: async (req, res) => {
        const newWorker = req.body;
        await createWorker(newWorker);
        res.end();
    },


    checkURLS: async (req, res) => {
        const allUrls = await getAllUrls();

        const worker = await findWroker(req.body.id);

        let workerURLS = worker[0].URLS;
        const allIDs = workerURLS.map(url => url._id);
        let newArr = [];

        const result = await allUrls.filter(all => {
            return allIDs.indexOf(all.id) === -1;
        })

        await result.map(el => {

            urlStatusCode(el.URL, async (error, statusCode) => {

                if (error) {
                    console.log(error);
                } else {

                    el.httpCode = statusCode;

                    switch (statusCode) {
                        case (200):
                            el.status = `DONE`;
                            break;
                        case (400):
                        case (401):
                        case (402):
                        case (403):
                        case (404):
                            el.status = `ERROR`;
                            break;
                        case (102):
                            el.status = `PROCESSING`;
                            break;
                    }
                }
                await newArr.push(el);
                await updateWorker(newArr);
            });
        })
        res.end();
    }
}
