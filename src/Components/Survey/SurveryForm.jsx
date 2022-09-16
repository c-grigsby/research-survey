// @packages
import axios from 'axios';
import React, { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
// @scripts
import SurveyQuestions from '../../Data/SurveyQuestions';

StylesManager.applyTheme('defaultV2');

const SurveyForm = (props) => {
  const survey = new Model(SurveyQuestions);

  const surveyComplete = useCallback((sender) => {
    axios
      .post('https://research-survey.herokuapp.com/api/v1/survey', {
        question1: sender.data.question1,
        question2: sender.data.question2,
        question3: sender.data.question3,
        question4: sender.data.question4,
        question5: sender.data.question5,
        question6: sender.data.question6,
        question7: sender.data.question7,
        question8: sender.data.question8,
        question9: sender.data.question9,
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
};

export default SurveyForm;
