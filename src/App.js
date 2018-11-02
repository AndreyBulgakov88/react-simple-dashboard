import React, { Component } from 'react';
import './App.css';
import DashboardScreen from './containers/DashboardScreen';
class App extends Component {
  render() {
    return (
      <div className="App">
          <DashboardScreen /> 
      </div>
    );
  }
}

export default App;
