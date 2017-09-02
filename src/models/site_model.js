const mongoose = require("mongoose")

const billboardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
})

const Site = mongoose.model("Site", billboardSchema)

const getSites = function(callback, limit) {
    Site.find(callback).limit(limit)
}

module.exports = { getSites }
