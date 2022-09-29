// @scripts
const asyncHandler = require('../middleware/async');
const surveyTemplateCopy = require('../models/SurveyModel');

// @desc    Posts survey data to MongoDB
// @route   POST /api/v1/survey
exports.postSurvey = asyncHandler(async (req, res, next_) => {
  const completedSurvey = new surveyTemplateCopy({
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4,
    question5: req.body.question5,
    question6: req.body.question6,
    question7: req.body.question7,
    question8: req.body.question8,
    question9: req.body.question9,
  });
  completedSurvey
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
