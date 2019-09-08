import React from 'react'
import './App.css'
import Mentor from './Mentor'
import Learning from './Learning'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


function Dashboard() {
    return (
        <Router>
            <Switch>
                <Route path="/Dashboard" exact render={() => {
                    return(
                        <div className="Dashboard">
                            <header className="Dashboard-header">
                            <div className="mainContainer">
                                <Mentor/>
                                <Link to="/Mentor">Mentor</Link>
                            </div>
                            <div className="mainContainer">
                                <Learning/>
                                <Link to="/Learning">Learning</Link>
                            </div>
                            </header>
                        </div>      
                    )
                }}/>
                <Route exact path="/Mentor" component={Mentor} />
                <Route exact path="/Learning" component={Learning} />
            </Switch>
        </Router>
    )
}

export default Dashboard;
