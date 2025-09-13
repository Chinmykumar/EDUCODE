const express = require('express');
const router = express.Router();
const { protect } = require('../config/models/models/models/middleware/auth');

// @route   GET /api/user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', protect, (req, res) => {
  res.json({
    success: true,
    message: 'User profile retrieved'
  });
});

// @route   PUT /api/user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', protect, (req, res) => {
  res.json({
    success: true,
    message: 'User profile updated'
  });
});

module.exports = router;