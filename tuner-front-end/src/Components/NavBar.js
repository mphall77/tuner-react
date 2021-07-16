import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<button className="nav-btn">
				<Link to="/songs">SONGS</Link>
			</button>
		</nav>
	);
};

export default NavBar;
