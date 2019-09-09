import React from 'react';
import './App.css';
import Login from './Login'
import Footer from './Footer'
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import {Grid} from '@material-ui/core';
import Learning from './Learning';
import Mentor from './Mentor'

function App() {
	return (
		<Router>
			<Route path="/" exact render={() => {
				return (
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div className="App">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <Grid className="AppTextContainer" item xs={12}>
                                        <h3 className="App-text">
                                            Welcome Back
                                        </h3>
                                    </Grid>
                                    <Grid className="AppTextContainer" item xs={12}>
                                        <h6 className="App-text">
                                            Sign in to continue
                                        </h6>
                                    </Grid>
                                    <Login />
                                </header>
                                <Footer />
                            </div>
                        </Grid>
                    </Grid>
				)
			}} />
            <Route exact path="/Mentor" component={Mentor} />
            <Route exact path="/Learning" component={Learning} />
			<Route exact path="/Dashboard" component={Dashboard} />
		</Router>
	);
}

export default App;
