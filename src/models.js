const mongoose = require("mongoose")

const componentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    component: {
        type: Object,
        required: true
    }
})
const Comp = mongoose.model("Component", componentSchema)
const getComponents = function(callback, limit) {
    Comp.find(callback).limit(limit)
}

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
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
const Post = mongoose.model("Post", postSchema)
const getPosts = function(callback, limit) {
    Post.find(callback).limit(limit)
}

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
    Project.find(callback).limit(limit)
}

const skillSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        default: []
    },
    keywords: {
        type: Array,
        default: []
    }
})
const Skill = mongoose.model("Skill", skillSchema)
const getSkills = function(callback, limit) {
    Skill.find(callback).limit(limit)
}

module.exports = { getComponents, getPosts, getProjects, getSkills }
