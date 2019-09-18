import React, { Component } from 'react';

import './App.css';
import Demo from './recorder/recorder.js';
import logo from './static/bankAssistant2.jpg';

import {Container,Row,Col} from 'react-grid-system';
import { Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';



class App extends Component {

  constructor(props){
    super(props)
    // this.handleChanges=this.handleChanges.bind(this);
  }

  render() {
    var options = {
      position: 'top center',
      timeout: 5000,
      offset: '10px',
      transition: 'fade'
    }

    return (
      <Provider template={AlertTemplate} {...options}>
      <div className="App">
      <Container>
       <Row>
       <Col sm={12}>
        <h3>Start Banking in Sinhala </h3>
        {/* </p> */}
        <p>දැන් ඔබටත් ඔබේ මව් බසින්ම සියලු බැංකු කටයුතු සිදු කිරීමට අවස්ථාව </p>
      </Col>
      <br />
      </Row>
      <br />
      <Row>
      <Col sm={3.5}>
      <h4>  </h4>
      <br/>
      <img  src={logo} alt="logo"  height="450" width="300"/>
    </Col>
    <Col sm={2}>
    </Col>
    <Col sm={5}>
      <h4>උත්සාහ කර බලන්න</h4>
      <p>'මයික්‍රොෆෝන්' (microphone) සලකුන ඔබා ඔබේ අවශ්‍යතාවය සිංහලෙන් කියන්න.</p>
      <br/>
      <Demo className= "Demo"/>
      </Col>
      </Row>
     </Container>
      </div>
      </Provider>
       
    )}
}


export default App;
