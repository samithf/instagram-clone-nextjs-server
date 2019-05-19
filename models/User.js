const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    }
  ]
});

module.exports = User = mongoose.model('users', UserSchema);
