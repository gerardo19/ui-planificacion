import React, { Component } from 'react';
import './App.css';
import incidentes from './components/incidentes';
import ListView from './components/listview';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav ul="menuNav">
            <ul className="menuUl">
              <li>Incidentes</li>
              <li>It Service request</li>
              <li>Problemas</li>
            </ul>




            {/* Esto tiene q ser variable según la ruta- incidentes - it service request - problemas
            <incidentes /> */}

          </nav>
        </header>

      </div>
    );
  }
}

export default App;
