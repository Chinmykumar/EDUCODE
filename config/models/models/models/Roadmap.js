const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  field: {
    type: String,
    required: true
  },
  experienceLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  goals: [String],
  timeline: {
    type: String,
    enum: ['3 months', '6 months', '1 year', '2 years'],
    default: '6 months'
  },
  steps: [{
    order: Number,
    title: String,
    description: String,
    resources: [{
      type: {
        type: String,
        enum: ['course', 'book', 'tutorial', 'article', 'project']
      },
      title: String,
      link: String,
      estimatedTime: String,
      completed: {
        type: Boolean,
        default: false
      }
    }],
    completed: {
      type: Boolean,
      default: false
    }
  }],
  progress: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update progress before saving
roadmapSchema.pre('save', function(next) {
  const totalSteps = this.steps.length;
  if (totalSteps === 0) {
    this.progress = 0;
    return next();
  }
  
  const completedSteps = this.steps.filter(step => step.completed).length;
  this.progress = Math.round((completedSteps / totalSteps) * 100);
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Roadmap', roadmapSchema);