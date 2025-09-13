const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: [{
    questionId: String,
    question: String,
    answer: mongoose.Schema.Types.Mixed,
    category: String
  }],
  skillsAssessment: {
    technical: Number,
    communication: Number,
    leadership: Number,
    problemSolving: Number,
    creativity: Number
  },
  recommendedFields: [String],
  suggestedSkills: [{
    name: String,
    priority: {
      type: String,
      enum: ['high', 'medium', 'low']
    },
    resources: [{
      type: {
        type: String,
        enum: ['course', 'book', 'tutorial', 'article']
      },
      title: String,
      link: String,
      provider: String
    }]
  }],
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assessment', assessmentSchema);