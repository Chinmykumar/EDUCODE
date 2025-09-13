const Assessment = require('../models/Assessment');
const User = require('../models/User');
const generateRoadmap = require('../utils/generateRoadmap');
const Roadmap = require('../models/Roadmap');

// Start a new assessment
exports.startAssessment = async (req, res) => {
  try {
    const { answers } = req.body;
    const userId = req.user.id;

    const assessment = await Assessment.create({
      user: userId,
      answers
    });

    res.status(201).json({
      success: true,
      data: assessment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Submit assessment answers
exports.submitAnswers = async (req, res) => {
  try {
    const { answers } = req.body;
    const assessmentId = req.params.id;
    const userId = req.user.id;

    let assessment = await Assessment.findOne({
      _id: assessmentId,
      user: userId
    });

    if (!assessment) {
      return res.status(404).json({
        success: false,
        message: 'Assessment not found'
      });
    }

    assessment.answers = [...assessment.answers, ...answers];
    await assessment.save();

    res.status(200).json({
      success: true,
      data: assessment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Complete assessment and generate roadmap