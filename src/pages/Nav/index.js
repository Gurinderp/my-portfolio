import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
	return (
		<nav>
			<div className="logo">Gurinder</div>
			<ul className="top-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
