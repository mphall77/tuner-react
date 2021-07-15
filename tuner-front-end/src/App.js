// DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import "./App.css";

// COMPONENTS
import NavBar from "./Components/NavBar";

// PAGES
import SongsIndex from "./Pages/SongIndex";
import Show from "./Pages/Show";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/songs">
						<SongsIndex />
					</Route>
					<Route exact path="/songs/:id">
						<Show />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
