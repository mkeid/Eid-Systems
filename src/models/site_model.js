const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    data: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model("Site", siteSchema);
