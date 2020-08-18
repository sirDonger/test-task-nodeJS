const {Schema, model} = require(`mongoose`);

const workerSchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },
    URLS: [{
        id: {
            type: Number,
            unique: true,
        },
        URL: {
            type: String,
        },
        status: {
            type: String,
            default: "New"
        },
        httpCode: {
            type: Number,
            default: null
        },
    }]
})

module.exports = model(`workers`, workerSchema);
