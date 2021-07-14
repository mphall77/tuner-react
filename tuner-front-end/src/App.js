// DEPENDENCIES
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import "./App.css";

// COMPONENTS
import NavBar from "./Components/NavBar";

// PAGES
import SongsIndex from "./Pages/SongIndex";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<main>
					<Route exact path="/songs">
						<SongsIndex />
					</Route>
				</main>
			</Router>
		</div>
	);
}

export default App;
