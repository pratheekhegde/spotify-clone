import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Player from './views/player';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route path="/" component={Player} />
  </Switch>
);

export default App;
