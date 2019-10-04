const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    }
});

let article = mongoose.model("articles", articleSchema);

module.exports = article;