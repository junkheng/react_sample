import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {Button, TextField, Grid} from '@material-ui/core';
import './index.css';


class Login extends React.Component {
    submitForm (e) {
		e.preventDefault()
		this.props.history.push('/Dashboard');
	}
	render() {
		return (
			<div>
				<form onSubmit={this.submitForm.bind(this)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="password"
                                label="Password"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button className="LoginButton" variant="outlined" type="submit">LOGIN</Button >
                            <p className="BlueText">
                                Forgot password
                            </p>
                        </Grid>
                    </Grid>
                </form>
			</div>
		)
	}
}
export default withRouter(Login)