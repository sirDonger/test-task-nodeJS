const {Router} = require(`express`);

const {workerController:{createWorker,checkURLS}} = require(`../controllers`)
const workerlRouter = Router();

workerlRouter.post(`/create`, createWorker);
workerlRouter.post(`/finde`, checkURLS);


module.exports = workerlRouter;
