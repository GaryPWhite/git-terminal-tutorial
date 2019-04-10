import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import history from './history';
import Terminal from 'terminal-in-react';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{display: "flex",
            justifyContent: "center",
            
            overflow: "auto"
          }}>
          <Sidebar>
            put links here  
          </Sidebar>
          <Terminal 
            backgroundColor="#073642"
            hideTopBar
            allowTabs={false}
          />
        </div>
      </Router>
    );
  }
}

export default App;
