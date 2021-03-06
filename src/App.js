import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class Home extends Component {
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
            Sharing is a great way to practice vulnerability. feather provides an easy way for you to open up to others and take the first step toward improving your wellbeing. Users send a SMS to get connected to a feather guide who is there to help lighten their burden.
            </span>
            <br/><br/>
            <span>
              *Text the number above and get connected to a feather guide.
              <br/><br/><b>Had a bad day?</b> Vent.
              <br/><br/><b>Just not feeling yourself?</b> Talk about it.
              <br/><br/><b>Have a tough life decision to make?</b> Get another perspective.
            </span>
          </div>
          <div className="Subinfo-Text">
            <span>
              *your phone number is completely anonymous and no messages are ever saved
            </span>
          </div>
          <div className="Button-Row">
            <Link className="Button" to="/become-a-guide">
                become a guide
            </Link>
            <a href="https://medium.com/@brennen_peters/introducing-feather-network-b56374e7dd82">
              <img src="images/medium.svg" className="Medium" alt="medium logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Guide extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{
        __html: '<html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> <title>Registration Form (copy)</title> <style type="text/css"> html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; } </style> </head> <body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://brennenpeters.typeform.com/to/YlrONO"></iframe> <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> </body> </html>'
      }} />
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/become-a-guide" component={Guide} />
        </div>
      </Router>
    );
  }
}

export default App;
