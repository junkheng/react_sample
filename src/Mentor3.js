import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import { Chart } from "react-google-charts";
import FooterNav from './FooterNav'
import Back from './Back'



const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      minWidth: 305,
    },
    description: {
        marginTop: 20,
        width: 305,
    },
    chart: {
        marginTop: 20,
        width: 345,
    },
    media: {
      height: 120,
    },
});


export default function Mentor3() {
    const classes = useStyles();

    return (
        <Router>
            <Switch>
                <Route path="/Dashboard" exact render={() => {
                    return(
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://static0.srcdn.com/wordpress/wp-content/uploads/2017/01/yoda-the-force-star-wars.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5"
                                title="Yoda"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Yoda
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Jedi Master <br/>
                                    Jedi Sanctuary
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Last Session <br/>
                                    10 May 2019 at 2.30PM
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <div style={{marginBottom: 10}}>
                                <Button className="AppointmentButton">
                                    Create Appointment →
                                </Button>
                            </div>
                    </Card>
                    )
                }}/>
                <Route path="/Mentor3" exact render={() => {
                    return(
                        <div className="Mentor">
                            <Back />
                                <header className="Mentor-header">
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://static0.srcdn.com/wordpress/wp-content/uploads/2017/01/yoda-the-force-star-wars.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5"
                                            title="Yoda"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Yoda
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Jedi Master <br/>
                                                Jedi Sanctuary
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className={classes.description}>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices eros.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices eros.
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className={classes.chart}>
                                    <CardContent>
                                        <Chart
                                            width={'300px'}
                                            height={'150px'}
                                            chartType="BarChart"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Subject', 'Force', 'Lightsaber', 'Jump', 'Age'],
                                                ['', 100, 50, 80, 95],
                                            ]}
                                            options={{
                                                title: 'Subject Competency',
                                                chartArea: { width: '40%' },
                                                hAxis: {
                                                title: 'Scoring',
                                                minValue: 0,
                                                },
                                                vAxis: {
                                                title: '',
                                                },
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </header>
                            <FooterNav />
                        </div>
                    )
                }}/>
                <Route exact path="/Mentor3" component={Mentor3} />
            </Switch>
        </Router>
    );
}
