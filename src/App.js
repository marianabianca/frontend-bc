import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import FormPost from './Form';
import AllBlocks from './AllBlocks';
import EspecificBlock from './EspecififBlock';
import LastBlock from "./LastBlock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bc: [],
    }
  }

  postCall (obj) {
    axios.post('http://localhost:81/blockchain', obj);
  }

  render() {    
    return (
      <div className="App">
          <Router>
            <div>
              
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Blockchain</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link to="/" className="nav-link">All blocks</Link>
                    <Link to="/add-transaction" className="nav-link">Add transaction</Link>
                    <Link to="/block" className="nav-link">Get especific block</Link>
                    <Link to="/last-block" className="nav-link">Get last block</Link>
                  </div>
                </div>
              </nav>

              <div className="container">
                <Route exact path="/" render={(props) => <AllBlocks />} />
                <Route path="/add-transaction" render={(props) => <FormPost submit={(values) => this.postCall(values)}/>} />
                <Route path="/block" render={(props) => <EspecificBlock />} />
                <Route path="/last-block" render={(props) => <LastBlock />} />
              </div>

            </div>
          </Router>
      </div>
    );
  }
}

export default App;
