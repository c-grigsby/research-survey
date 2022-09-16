// @packages
import React from 'react';
import { Card, CardBody, Container } from 'reactstrap';
// @scripts
import './App.css';
import SurveyForm from './Components/Survey/SurveryForm';

function App() {
  return (
    <div className='App'>
      <Container className='Container'>
        <Card className='Card'>
          <CardBody className='CardBody'>
            <div>
              <SurveyForm className='Survey' />
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
