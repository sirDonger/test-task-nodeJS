const {Router} = require(`express`);

const {urlController: {getAllUrls, createUrl, checkStatusCode}} = require(`../controllers`)
const urlRouter = Router();

urlRouter.get(`/`, getAllUrls);
urlRouter.post(`/create`, createUrl);


module.exports = urlRouter;
