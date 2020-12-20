import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NasaPicture from './components/NasaPicture';




function App() {

  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/nasapicture" component={NasaPicture}/>
          </Switch>      
        </Router>
      </div>

  )
}


export default App;
