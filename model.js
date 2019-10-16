const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let articleSchema = new Schema({
  Title: {
    type: String,
    trim: true
  },
  Link: {
    type: String,
    trim: true
  },
  Notes: {
    type: [],
    trim: true
  },
  Saved: {
    type: Boolean,
    default: false
  },
  Image: {
    type: String,
    trim: true
  }
});

let article = mongoose.model('articles', articleSchema);

module.exports = article;
