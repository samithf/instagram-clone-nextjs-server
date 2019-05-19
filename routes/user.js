const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route   GET api/users
// @desc    get all users
// @access  Public
router.get('/', async (req, res) => {
  const users = await User.find({}).exec();
  return res.json(users);
});

// @route   GET api/users/liked_posts
// @desc    get all user liked posts
// @access  Public
router.get('/liked_posts', async (req, res) => {
  const user = await User.findOne({ _id: '5cded4d9c77bfa18b43d3e28' })
    .populate('likes')
    .exec();
  return res.json(user.likes);
});

// @route   PUT api/users/:id
// @desc    update user with id
// @access  Public
router.put('/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    { new: true }
  ).exec();
  return res.json(updated);
});

// @route   GET api/users/loggedUser
// @desc    get logged user which is default to '5cded4d9c77bfa18b43d3e28'
// @access  Public
router.get('/loggedUser', async (req, res) => {
  const user = await User.findById('5cded4d9c77bfa18b43d3e28').exec();
  return res.json(user);
});

module.exports = router;
