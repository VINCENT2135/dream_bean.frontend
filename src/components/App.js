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
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand> 
      
      DreamBean
      </Navbar.Brand>
<Nav>
<Nav.Link href="/home">HomePage</Nav.Link>
<Nav.Link href="/about">About</Nav.Link>
<Nav.Link href="/beans">Beans</Nav.Link>

  
  </Nav>  
     
    </Navbar>

      <Router/> 
  
  </div>
  );
};


export default App;



