const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Score', scoreSchema);
