const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    forIndex: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Project", projectSchema)
