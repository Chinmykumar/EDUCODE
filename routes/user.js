const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const Roadmap = require('../models/Roadmap');

// @route   GET /api/user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('completedAssessments')
      .populate('roadmaps');
    
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/user/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const { name, careerField, experienceLevel, goals, skills } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, careerField, experienceLevel, goals, skills },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   GET /api/user/roadmaps
// @desc    Get user's roadmaps
// @access  Private
router.get('/roadmaps', protect, async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({ user: req.user.id });
    
    res.json({
      success: true,
      data: roadmaps
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;