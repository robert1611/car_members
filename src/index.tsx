import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateCar, Cars } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import logo from './assets/img/car.jpg';
import './styles.css';

// Imports from React-Router-Dom
//    (1) Home Page, (2) About Page, (3) Router Page
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 }
from 'react-router-dom';


render(
  <React.StrictMode>
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt="Car Members"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <Link to="/">Car Members Area</Link>
        </Navbar.Brand>
      
    <Nav className="move-nav" activeKey='/'>
    
      <Nav.Item>
        <Nav.Link>
          <Link to='/'>Home</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='/cars'>Display Your Cars</Link>
        </Nav.Link>
      </Nav.Item>

      
    </Nav>
  </Navbar>

      <Switch>
        <Route exact path="/">
          <Home title="Classic Cars" age={31} />
        </Route>
        <Route path="/create">
          <CreateCar />
        </Route>
        <Route path="/cars">
          <Cars />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

