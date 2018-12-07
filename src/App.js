import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/docplanner.css';
import Header from './components/Header.js';
import Presentations from './components/Presentations.js';
import Services from './components/Services.js';
import Marque from './components/Marque.js';
import Stat from './components/Stat.js';
// import Presentation1 from './components/Presentation1.js';
// import CarePlatform from './components/CarePlatform.js';
// import Liste from './components/Liste.js';
import Office from './components/Offices.js';
import Footer from './components/Footer.js';
import { Container, Row, Col } from 'reactstrap';
class App extends Component 
{
  render() 
  { 
    return (
    <div>
      
      <Header />
      <Presentations />
      <Services />
      <Marque />
      <Stat />
      <Office/>
      <Footer />
  </div>
      );

  }
}
 
export default App ;

