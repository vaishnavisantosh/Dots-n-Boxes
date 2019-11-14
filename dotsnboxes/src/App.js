import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
//import Dots from './Component/Dot/Dot';
import Game from './Component/Game/Game';
import Home from './Component/Home/Home';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
        </Route>



      </div>
    );
  }
}

export default App;
