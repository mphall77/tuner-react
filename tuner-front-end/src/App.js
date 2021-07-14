// DEPENDENCIES
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import "./App.css";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
			</Router>
		</div>
	);
}

export default App;
