const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post');

// @route   GET api/posts
// @desc    get all posts
// @access  Public
router.get('/', async (req, res) => {
  const posts = await Post.find({})
    .populate('user', 'username avatarUrl')
    .exec();
  return res.json(posts);
});

// @route   PUT api/posts/:id
// @desc    update post by id
// @access  Public
router.put('/:id', async (req, res) => {
  const updated = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    { new: true }
  )
    .populate('user', 'username avatarUrl')
    .exec();
  return res.json(updated);
});

module.exports = router;
