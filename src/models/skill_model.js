const mongoose = require("mongoose");


const skillSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: Array,
        default: []
    },
    keywords: {
        type: Array,
        default: []
    },
    imgSrc: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Skill", skillSchema);
