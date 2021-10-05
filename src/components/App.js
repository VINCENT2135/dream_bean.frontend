import React from 'react';
//import Button from 'react-bootstrap/button ' 
//import BeansContainer from './BeansContainer';
import 'bootstrap/dist/css/bootstrap.css'
import Router from './Router' 
import './styles.css'
import { Nav, Navbar} from 'react-bootstrap'

const App = () => {
  return (
  <div className="App">
    <Navbar bg="myBean" variant="light">
      <Navbar.Brand> Dream Bean</Navbar.Brand>
      <Nav>
        <Nav.Link href="/home">HomePage</Nav.Link>
        <Nav.Link href="/origins">Origins</Nav.Link>
        <Nav.Link href="/beans">Add A Bean</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/varieties"> Varieties </Nav.Link>
      </Nav> 
    </Navbar>
    <Router/>
  </div>
  );
};

export default App;