// @packages
import React from 'react';
import 'survey-react/survey.css';
import * as SurveyJS from 'survey-react';
// @scripts
import SurveyQuestions from '../../Data/SurveyQuestions';

const Survey = (props) => {
  return (
    <SurveyJS.Survey
      json={SurveyQuestions}
      onComplete={(data) => {
        console.log("Survery Data:", data.valuesHash);
        // send to database here
      }}
    />
  );
};

export default Survey;
