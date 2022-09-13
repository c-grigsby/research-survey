// @packages
import React from 'react';
import { Card, CardBody, Container } from 'reactstrap';
// @scripts
import './App.css';
import Survey from './Components/Survey/Survery';

function App() {
  return (
    <div className='App'>
      <Container>
        <Card className='form'>
          <CardBody>
            <Survey />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
