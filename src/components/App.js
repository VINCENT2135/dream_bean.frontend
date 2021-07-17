import React from 'react';
//import Button from 'react-bootstrap/button ' 

//import BeansContainer from './BeansContainer';
import 'bootstrap/dist/css/bootstrap.css'



import Router from './Router'
import './styles.css'
import { Navbar } from 'react-bootstrap'








const App = () => {
  return (
  <div className="App">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand> 

       Dream Bean Navigation 
      </Navbar.Brand>
  
  <Router/> 

  </Navbar>


  
  </div>
  );
};


export default App;



