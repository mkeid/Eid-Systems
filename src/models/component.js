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

module.exports = { getComponents }
