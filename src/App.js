import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Player from './views/player';
import './App.css';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Spotify';
    src: url('https://open.scdn.co/fonts/CircularSpUIv3T-Light.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }

  @font-face {
    font-family: 'Spotify';
    src: url('https://open.scdn.co/fonts/CircularSpUIv3T-Book.woff2') format('woff2');
    font-style: bold;
    font-weight: 600;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }
  body {
    font-family:'Spotify'
  }
`

const App = () => (
  <div>
    <GlobalStyle/>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/" component={Player} />
    </Switch>
  </div>
);

export default App;
