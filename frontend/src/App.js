import React, { Component } from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/images/IAS.png';
import MenuServicio from './components/MenuServicio';
import MenuCalcular from './components/MenuCalcular';
import MenuPrincipal from './components/MenuPrincipal';
import Respuesta from './components/Respuesta';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div> 
        <Router> 
          <div>
            <nav className="bg-primary color-white">
              <img src={logo} alt=""/> <b> IAS HandyMand </b> 
              <a href="/" className="color-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-fill float-right margin-big" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
              </a>
            </nav>
          </div>
          <div>
            <Switch>
              <Route path="/" exact component = {MenuPrincipal} />
              <Route path="/MenuServicio" exact component = {MenuServicio} />
              <Route path="/MenuCalcular" exact component = {MenuCalcular} />
              <Route path="/Respuesta" exact component = {Respuesta} />
            </Switch>
          </div>
        </Router>
      </div>  
    );
  }
}
export default App; 