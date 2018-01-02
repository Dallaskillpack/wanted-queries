import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        { routes }

        <div>
          <h6 name="versionText"> Version 2.0 </h6>
        </div>
      </div>
    );
  }
}

export default App;