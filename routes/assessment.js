const express = require('express');
const router = express.Router();
const { protect } = require('../config/models/models/models/middleware/auth');

// @route   POST /api/assessment/start
// @desc    Start new assessment
// @access  Private
router.post('/start', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Assessment started'
  });
});

// @route   GET /api/assessment/:id
// @desc    Get assessment by ID
// @access  Private
router.get('/:id', protect, (req, res) => {
  res.json({
    success: true,
    message: 'Assessment retrieved'
  });
});

module.exports = router;