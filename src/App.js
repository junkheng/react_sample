import React from 'react';
import './App.css';
import Login from './Login'
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import {Grid} from '@material-ui/core';

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
                            </div>
                        </Grid>
                    </Grid>
				)
			}} />
			<Route exact path="/Dashboard" component={Dashboard} />
		</Router>
	);
}

export default App;
