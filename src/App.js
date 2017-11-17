import React, { Component } from 'react';
import ListView from './components/listview';
import ReactDOM from 'react-dom';
import Incidentes from './components/incidentes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import Navbar from './components/navbar'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider >
          <Navbar />
          <Incidentes />
        </MuiThemeProvider>

      </div>
    );
  }
}