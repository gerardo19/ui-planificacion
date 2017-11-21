import React, { Component } from 'react';
import ListView from './components/listview';
import ReactDOM from 'react-dom';
import Incidentes from './components/incidentes';
import Problemas from './components/problemas';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import Navbar from './components/navbar'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      component: <Incidentes />
    }
  }

  select = (index) => {
    this.setState({ selectedIndex: index })
    switch (index) {
      case 0:
        this.setState({ component: <Incidentes /> })
        break;
      case 1:
        this.setState({ component: <Problemas /> })
        break;
      case 2:
        this.setState({ component: <Problemas /> })
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider >
          <Navbar select={this.select} selectedIndex={this.state.selectedIndex} />
        </MuiThemeProvider>
        <MuiThemeProvider >
          {this.state.component}
        </MuiThemeProvider>
      </div>
    );
  }
}