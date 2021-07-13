import "../assets/styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Components
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ConnectRouter from "./Pages/ConnectRouter";
import AccountSettings from "./Pages/AccountSettings";

function App() {

	return (
		<div className="page">
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/connect_router" component={ConnectRouter} />
					<Route exact path="/account_settings" component={AccountSettings} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
