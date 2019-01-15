import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Navigation from './Navigation'
import Home from './Home';
import Choose from './Choose';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
        <div>
        <Navigation /> 
           
                <Route path="/" component ={Home} exact />
                <Route path="/choose"component ={Choose}/>
                <Route path="/contact" component={Contact}/>
          
            
            </div>
        </BrowserRouter>
    
    );
  }
}

export default App;
