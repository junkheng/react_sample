import React from 'react';
import './App.css';
import Login from './Login'
import logo from './img/the-terminator.jpg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import { Grid } from '@material-ui/core';
import Learning from './Learning';
import Mentor from './Mentor'
import Mentor2 from './Mentor2'
import Mentor3 from './Mentor3'

function App() {
  return (
    <Router>
      <Route path="/" exact render={() => {
        return (
          <Grid container>
            <Grid item xs={12}>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Grid className="AppTextContainer" item xs={12}>
                    <h3 className="App-text">
                      Time to get Sneaky!
                    </h3>
                  </Grid>
                  <Login />
                </header>
              </div>
            </Grid>
          </Grid>
        )
      }} />
      <Route exact path="/Mentor" component={Mentor} />
      <Route exact path="/Mentor2" component={Mentor2} />
      <Route exact path="/Mentor3" component={Mentor3} />
      <Route exact path="/Learning" component={Learning} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
