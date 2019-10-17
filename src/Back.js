import React from "react";
import { withRouter } from "react-router-dom";
import './index.css'

const Back = ({ history }) => (
	<div className="BackButton">
		<button style={{ fontSize: 20 }} onClick={history.goBack}>←</button>
	</div>
);

export default withRouter(Back);