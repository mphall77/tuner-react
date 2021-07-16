import { Link } from "react-router-dom";
import "../NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<button className="nav-btn">
				<Link to="/songs">Songs</Link>
			</button>
		</nav>
	);
};

export default NavBar;
