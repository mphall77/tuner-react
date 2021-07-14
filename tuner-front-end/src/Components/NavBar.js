import { Link } from "react-router-dom";
import "../NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<Link to="/songs">Songs</Link>
		</nav>
	);
};

export default NavBar;
