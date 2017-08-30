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

const Project = mongoose.model("Project", projectSchema)

const getProjects = function(callback, limit) {
    Project.find(callback).sort("type").limit(limit)
}

module.exports = { getProjects }
