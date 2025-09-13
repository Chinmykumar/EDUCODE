const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { 
  startAssessment, 
  submitAnswers, 
  completeAssessment, 
  getUserAssessments 
} = require('../controllers/assessmentController');

// @route   POST /api/assessment/start
// @desc    Start new assessment
// @access  Private
router.post('/start', protect, startAssessment);

// @route   PUT /api/assessment/:id/answers
// @desc    Submit assessment answers
// @access  Private
router.put('/:id/answers', protect, submitAnswers);

// @route   POST /api/assessment/:id/complete
// @desc    Complete assessment and generate roadmap
// @access  Private
router.post('/:id/complete', protect, completeAssessment);

// @route   GET /api/assessment/user
// @desc    Get user's assessments
// @access  Private
router.get('/user', protect, getUserAssessments);

// @route   GET /api/assessment/:id
// @desc    Get assessment by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const Assessment = require('../models/Assessment');
    const assessment = await Assessment.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!assessment) {
      return res.status(404).json({
        success: false,
        message: 'Assessment not found'
      });
    }

    res.json({
      success: true,
      data: assessment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;