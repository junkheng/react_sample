import React from 'react'
import './App.css'
import Mentor from './Mentor'
import Mentor2 from './Mentor2'
import Mentor3 from './Mentor3'
import Learning from './Learning'
import FooterNav from './FooterNav'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


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
                                <div className="carouselContainer">
                                    <CarouselProvider
                                        naturalSlideWidth={325}
                                        naturalSlideHeight={400}
                                        totalSlides={3}
                                    >
                                        <Slider>
                                            <Slide index={0}><Link style={{textDecoration: 'none'}} to="/Mentor"><Route component={Mentor}/></Link></Slide>
                                            <Slide index={1}><Link style={{textDecoration: 'none'}} to="/Mentor2"><Route component={Mentor2}/></Link></Slide>
                                            <Slide index={2}><Link style={{textDecoration: 'none'}} to="/Mentor3"><Route component={Mentor3}/></Link></Slide>
                                        </Slider>
                                    </CarouselProvider>
                                </div>
                            </div>
                            <div className="LearningHeaderText">
                                <h2 style={{margin: 0}}>
                                    Learning Materials
                                </h2>
                                <h5 style={{margin: 0}}>
                                    Check out what's new
                                </h5>
                            </div>
                            <div className="mainContainer">
                                <Route component={Learning}/>
                            </div>
                            </header>
                            <FooterNav />
                        </div>      
                    )
                }}/>
            <Route exact path="/Mentor" component={Mentor} />
            <Route exact path="/Mentor2" component={Mentor2} />
            <Route exact path="/Mentor3" component={Mentor3} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Learning" component={Learning} />
            </Switch>
        </Router>
    )
}

export default Dashboard;
