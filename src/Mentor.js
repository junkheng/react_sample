import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
		paddingTop: 70,
		marginTop: 70,
		height: 255,
		overflow: 'visible',
	},
	profilecard: {
		width: 355,
		paddingTop: 70,
		marginTop: 70,
		height: 125,
		overflow: 'visible',
	},
	description: {
		marginTop: 20,
		width: 305,
	},
	profiledescription: {
		marginTop: 20,
		width: 355,
	},
	chart: {
		marginTop: 20,
		width: 355,
	},
	media: {
		height: 120,
	},
});


export default function Mentor() {
	const classes = useStyles();

	return (
		<Router>
			<Switch>
				<Route path="/Dashboard" exact render={() => {
					return (
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className="MentorImage"
									image="https://i1.wp.com/MynockManor.com/wp-content/uploads/2018/02/Darth-Vader-Dark-Lord-of-the-Sith-12.jpg"
									title="Lord Vader"
								/>
								<CardContent className="TextLeft">
									<Typography style={{ color: '#4A90E2' }} gutterBottom variant="h5" component="h2">
										Darth Vader
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Student <br />
										INIT College
									</Typography>
									<br />
									<Typography variant="body2" color="textSecondary" component="p">
										Last Session <br />
										10 May 2019 at 2.30PM
									</Typography>
								</CardContent>
							</CardActionArea>
							<div>
								<button className="AppointmentButton">
									<p className="TextLeft" style={{ fontSize: 15, paddingLeft: 10 }}>CREATE APPOINTMENT</p>
									<p className="TextRight" style={{ fontSize: 15, paddingRight: 10 }}>→</p>
									{/* Create Appointment → */}
								</button>
							</div>
						</Card>
					)
				}} />
				<Route path="/Mentor" exact render={() => {
					return (
						<div className="Mentor">
							<Back />
							<header className="Mentor-header">
								<Card className={classes.profilecard}>
									<CardActionArea>
										<CardMedia
											className="MentorProfileImage"
											image="https://i1.wp.com/MynockManor.com/wp-content/uploads/2018/02/Darth-Vader-Dark-Lord-of-the-Sith-12.jpg"
											title="Lord Vader"
										/>
										<CardContent>
											<Typography style={{ color: '#4A90E2' }} gutterBottom variant="h5" component="h2">
												Darth Vader
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Student <br />
												INIT College
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
								<Card className={classes.profiledescription}>
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
												['Subject', 'Math', 'English', 'History', 'Science'],
												['', 100, 92, 80, 95],
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
				}} />
				<Route exact path="/Mentor" component={Mentor} />
			</Switch>
		</Router>
	);
}
