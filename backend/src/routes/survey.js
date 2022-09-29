// @packages
const express = require('express');
// @scripts
const {postSurvey} = require('../controllers/survey-controller');

const router = express.Router();

// @route /api/v1/survey
router.route('/').post(postSurvey);


module.exports = router;