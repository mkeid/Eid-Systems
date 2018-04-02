const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Link", linkSchema);
