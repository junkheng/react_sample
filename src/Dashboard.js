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
                            <div className="MentorHeaderText">
                                <h2 style={{margin: 0}}>
                                    My mentors
                                </h2>
                                <h5 style={{margin: 0}}>
                                    Your recent mentors
                                </h5>
                            </div>
                            <div className="mainContainer">
                                <Link to="/Mentor"><Mentor/></Link>
                            </div>
                            <div className="MentorHeaderText">
                                <h2 style={{margin: 0}}>
                                    Learning Materials
                                </h2>
                                <h5 style={{margin: 0}}>
                                    Check out what's new
                                </h5>
                            </div>
                            <div className="mainContainer">
                                <Learning/>
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
