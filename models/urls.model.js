const {Schema, model} = require(`mongoose`);

const urlSchema = new Schema({
    id: {
        type: Number,
        autoIncrement: true,
        unique: true,
    },
    URL: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "New"
    },
    httpCode: {
        type: Number,
        default: null
    },
})

module.exports = model(`urls`, urlSchema);
