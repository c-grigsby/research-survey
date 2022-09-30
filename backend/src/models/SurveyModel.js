// @packages
const mongoose = require('mongoose');

const surveyTemplate = new mongoose.Schema({
  question1: {
    type: Boolean,
    required: true,
  },
  question2: {
    type: Boolean,
    required: true,
  },
  question3: {
    type: Boolean,
    required: true,
  },
  question4: {
    type: Boolean,
    required: true,
  },
  question5: {
    type: Boolean,
    required: true,
  },
  question6: {
    type: String,
    required: true,
  },
  question7: {
    type: String,
    required: true,
  },
  question8: {
    type: String,
    required: true,
  },
  question9: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ResearchSurvey', surveyTemplate);
