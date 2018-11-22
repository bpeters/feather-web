import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Content">
          <div>
            <span className="Title-Text">
              feather
            </span>
            <img src="images/logo.svg" className="Logo" alt="feather logo" />
            <img src="images/logo.svg" className="Logo-Big" alt="feather logo big" />
            <img src="images/logo.svg" className="Logo-Bigger" alt="feather logo bigger" />
          </div>
          <div className="Subtitle-Text">
            <span>
              {`your `}
            </span>
            <b>
              anonymous social health network
            </b>
          </div>
          <div className="Small-Text">
            <span>
              A lighter approach to improving your wellbeing.
            </span>
          </div>
          <div className="Phone">
            +1 512 710 2985
          </div>
        </div>
      </div>
    );
  }
}

export default App;
