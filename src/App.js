import React, { Component } from 'react';
import incidentes from './components/incidentes';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import Navbar from './components/navbar'
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider >
          <Navbar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
