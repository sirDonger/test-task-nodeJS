const {urlModels} = require(`../models`);

module.exports = {
    getAllUrls: async () => {
        const allUrls = await urlModels.find({});
        return allUrls;
    },
    createURL: async (newUrl) => {
        return new urlModels(newUrl).save();
    },

}


