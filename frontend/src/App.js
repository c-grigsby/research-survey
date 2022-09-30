// @packages
import React from 'react';
import { Card, CardBody, Container } from 'reactstrap';
// @scripts
import './App.css';
import SurveyForm from './Components/Survey/SurveryForm';

function App() {
  return (
    <div className='App'>
      <Container>
        <Card className='Card'>
          <CardBody>
            <SurveyForm />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
