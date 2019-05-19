const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  numOfLikes: {
    type: Number
  },
  description: {
    type: String,
    required: true
  },
  numOfComments: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = Post = mongoose.model('posts', PostSchema);
