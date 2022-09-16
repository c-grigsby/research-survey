// @packages
import React, {useCallback} from 'react';
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
// @scripts
import SurveyQuestions from '../../Data/SurveyQuestions';

StylesManager.applyTheme("defaultV2");

const SurveyForm = (props) => {
  const survey = new Model(SurveyQuestions);

  const surveyComplete = useCallback((sender) => {
    console.log(sender.data);
    // send to database
   }, []);
   survey.onComplete.add(surveyComplete);

  return (
    <Survey model={survey} />
  );
};

export default SurveyForm;
