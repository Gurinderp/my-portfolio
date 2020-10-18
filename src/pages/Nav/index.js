import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
	return (
		<nav>
			<ul className="top-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/resume">Resume</Link>
				</li>
				<li>
					<Link to="/about">About Me</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
