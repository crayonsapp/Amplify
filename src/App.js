import React from "react";
import './App.css';
import Customer from './components/Customer';
import Staff from './components/Staff';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <main className='App'>
        <Row>
          <Col md={6} className="p-0"><Customer /></Col>
          <Col md={6} className="p-0"><Staff /></Col>
        </Row>
        <Row>
          <Footer />
        </Row>
    </main>
  );
}

export default App;
