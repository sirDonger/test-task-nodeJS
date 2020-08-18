const {workerlModels} = require(`../models`);
module.exports = {

    createWorker: async (worker) => {
        try {
            console.log(worker);
            return new workerlModels(worker).save();
        } catch (e) {
            console.log(e);
        }
    },
    updateWorker: async (updatedWorker) => {
        return await workerlModels.updateMany({URLS: updatedWorker})
    },

    findWroker: (id) => {
        return workerlModels.find({id})
    }
}


