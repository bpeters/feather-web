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
              A lighter approach to improving your wellbeing through simple SMS conversations.
            </span>
          </div>
          <div className="Phone">
            +1 512 710 2985
          </div>
          <div className="Info-Text">
            <span>
              *Text the number above and get connected to one of our certified guides. Get anything off your chest:
              <br/><br/><b>Had a bad day?</b> Vent.
              <br/><br/><b>Just not feeling yourself?</b> Talk about it.
              <br/><br/><b>Have a tough life decision to make?</b> Get another person's perspective.
            </span>
          </div>
          <div className="Subinfo-Text">
            <span>
              *your phone number is completely anonymous and no messages are ever saved
            </span>
          </div>
          <a href="" target="_blank" className="Button">
            become a guide
          </a>
        </div>
      </div>
    );
  }
}

export default App;
