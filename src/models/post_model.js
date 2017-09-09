const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imgSrc: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: null
    }
})


module.exports = mongoose.model("Post", postSchema)
